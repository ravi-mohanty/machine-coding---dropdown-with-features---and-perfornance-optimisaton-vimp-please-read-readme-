import { useState } from "react";

/*
  THE INPUT SHAPE
  ----------------
  A plain nested object. Each node has:
    - id: a unique string (what you saw in the diagram: "1.0", "2.0", "3.1"...)
    - label: display text
    - children: an array of more nodes (or omitted/empty for a leaf)

  This is the "nested children array" flavor we discussed — not the
  flat parentId flavor. Swap this out for your real tree.
*/
const treeData = {
  id: "1.0",
  label: "Lorem ipsum",
  children: [
    {
      id: "2.0",
      label: "Lorem ipsum",
      children: [
        {
          id: "3.1",
          label: "Lorem ipsum",
          children: [
            {
              id: "4.1",
              label: "Lorem ipsum",
              children: [
                {
                  id: "5.1",
                  label: "Lorem ipsum",
                  children: [
                    { id: "6.1.1", label: "Lorem ipsum" },
                    { id: "6.1.2", label: "Lorem ipsum" },
                    { id: "6.1.3", label: "Lorem ipsum" },
                  ],
                },
                {
                  id: "5.2",
                  label: "Lorem ipsum",
                  children: [
                    { id: "6.2.1", label: "Lorem ipsum" },
                    { id: "6.2.2", label: "Lorem ipsum" },
                  ],
                },
              ],
            },
            { id: "4.2", label: "Lorem ipsum" },
            { id: "4.3", label: "Lorem ipsum" },
          ],
        },
        { id: "3.2", label: "Lorem ipsum" },
        { id: "3.3", label: "Lorem ipsum" },
      ],
    },
  ],
};

/*
  THE RECURSIVE NODE
  -------------------
  This is where "carrying the path along" actually happens.

  - parentPath arrives as a prop: everything above THIS node, already assembled.
  - ownPath is computed once, right here: parentPath + [node.id].
  - That's the "name tag handed at the door" from our analogy.
  - onNodeClick is called with ownPath already baked in — no lookup,
    no traversal, no bubbling. The click just reports what this node
    already knew about itself since the moment it rendered.
  - Then, when rendering children, we hand them ownPath — so THEY can
    do the same one-line concatenation for themselves.
*/
function TreeNode({ node, parentPath, onNodeClick }) {
  const ownPath = [...parentPath, node.id];
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div style={{ marginLeft: parentPath.length ? 20 : 0 }}>
      <button
        onClick={() => onNodeClick(ownPath)}
        className="flex items-center gap-2 rounded-md px-2 py-1 my-0.5 text-sm hover:bg-amber-50 transition-colors"
      >
        <span className="inline-block h-3 w-3 rounded-sm bg-amber-400" />
        <span className="text-slate-500 font-mono text-xs w-12 shrink-0">
          {node.id}
        </span>
        <span className="text-slate-700">{node.label}</span>
      </button>

      {hasChildren && (
        <div className="border-l border-slate-200 ml-[7px]">
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              parentPath={ownPath}
              onNodeClick={onNodeClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/*
  THE ROOT
  ---------
  Kicks off the recursion with parentPath = [] (root has no ancestors).
  Holds the one piece of state: whatever path was last reported by a click.
*/
export default function TreePathFinder() {
  const [selectedPath, setSelectedPath] = useState(null);

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <div className="rounded-lg border border-slate-200 p-4 bg-white">
        <TreeNode node={treeData} parentPath={[]} onNodeClick={setSelectedPath} />
      </div>

      <div className="rounded-lg border border-slate-200 p-4 bg-slate-50 min-h-[52px]">
        <div className="text-xs uppercase tracking-wide text-slate-400 mb-1">
          Path
        </div>
        {selectedPath ? (
          <div className="font-mono text-sm text-slate-700">
            {selectedPath.join(" / ")}
          </div>
        ) : (
          <div className="text-sm text-slate-400">Click any node above</div>
        )}
      </div>
    </div>
  );
}