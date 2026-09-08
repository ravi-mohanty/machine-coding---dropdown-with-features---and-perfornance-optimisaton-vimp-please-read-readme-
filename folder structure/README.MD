Let's trace the actual execution, call by call, using the real treeData from the file — like stepping through with a debugger.

Step 0 — the trigger

TreePathFinder renders once. It calls:

TreeNode(node = 1.0, parentPath = [])

That's the only call anyone makes manually. Every other call from here on is TreeNode calling itself.

Step 1 — processing node 1.0

Inside this call:

ownPath = [...[], "1.0"] → ["1.0"]
Renders its button (id 1.0, path ["1.0"] baked into its click handler)
Checks node.children → [ {2.0...} ] → one item
Loops that array with .map() → for the single child 2.0, calls:
TreeNode(node = 2.0, parentPath = ["1.0"])

This call is paused mid-execution, waiting on the child call above to finish rendering, before 1.0's own render can be considered complete. (This is just how nested function/JSX calls always work — nothing tree-specific.)

Step 2 — processing node 2.0
ownPath = [..."1.0", "2.0"] → ["1.0", "2.0"]
Renders its button (path ["1.0", "2.0"])
node.children → [ {3.1...} ] → one item
Calls:
TreeNode(node = 3.1, parentPath = ["1.0", "2.0"])
Step 3 — processing node 3.1
ownPath = ["1.0", "2.0", "3.1"]
Renders its button
node.children → three items: 4.1, 4.2, 4.3
.map() now calls TreeNode three separate times, once per item, in array order:
TreeNode(node = 4.1, parentPath = ["1.0","2.0","3.1"])   ← call A
TreeNode(node = 4.2, parentPath = ["1.0","2.0","3.1"])   ← call B
TreeNode(node = 4.3, parentPath = ["1.0","2.0","3.1"])   ← call C

Notice: all three receive the identical parentPath — same array, same reference conceptually — because they share the same parent. Each one appends a different last element to it.

React fully finishes call A (and everything nested inside it) before starting call B. So the next steps go deep into 4.1 first.

Step 4 — processing node 4.1 (call A, going deeper first)
ownPath = ["1.0","2.0","3.1","4.1"]
node.children → one item: 5.1
TreeNode(node = 5.1, parentPath = ["1.0","2.0","3.1","4.1"])
Step 5 — processing node 5.1
ownPath = ["1.0","2.0","3.1","4.1","5.1"]
node.children → three items: 6.1.1, 6.1.2, 6.1.3
Calls, in order:
TreeNode(6.1.1, parentPath = ["1.0","2.0","3.1","4.1","5.1"])
TreeNode(6.1.2, parentPath = ["1.0","2.0","3.1","4.1","5.1"])
TreeNode(6.1.3, parentPath = ["1.0","2.0","3.1","4.1","5.1"])
Step 6 — processing node 6.1.1 (a leaf)
ownPath = ["1.0","2.0","3.1","4.1","5.1","6.1.1"]
Renders its button — this exact array is now baked into that button's onClick
node.children → undefined → hasChildren is false → no further calls. Recursion bottoms out here. This call returns.

6.1.2 and 6.1.3 each repeat step 6's pattern (same parentPath, different last name), then also bottom out.

Step 7 — unwinding back up

Once all of 5.1's children are done, 5.1's own render is complete → returns → 4.1's render is complete → returns → back to Step 3's call B: 4.2.

Step 8 — call B: node 4.2
ownPath = ["1.0","2.0","3.1","4.2"]
node.children → none → leaf, stops immediately.
Step 9 — call C: node 4.3
Same pattern: ownPath = ["1.0","2.0","3.1","4.3"], leaf, stops.
Step 10 — back up to 2.0's other work

3.1 is now fully done → 2.0 finishes → but wait, does 2.0 have siblings? Looking at the data, 1.0 only had one child (2.0), so nothing left there either → everything unwinds back to TreePathFinder, which is now holding a fully rendered tree, where every single node's button already has its own ownPath array permanently attached — computed once, during this exact walk, never touched again unless the whole tree re-renders.

The one-sentence summary of the trace

Going down builds the array one link at a time (parentPath → ownPath); going deep-first through one child completely before moving to the next is just what .map() + recursion naturally does; hitting a leaf (node.children missing) is the only thing that stops a branch. Nothing waits for a click — this entire trace happens once, upfront, for the whole tree, regardless of what gets clicked later.

Want to now trace the second half — what happens the instant you click 6.1.2, given everything above already happened?