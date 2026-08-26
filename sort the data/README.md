install vite command --> npm create vite@latest . -- --template react --> .represent need to install in the current folder

sort on the basis of the label --> here if we click the name it will sort on the basis of name the entire row is sorted.
-----------------------------------------------------------------------------------------------------------------------
Step 3: My approach before writing any code

Reason this matters: interviewers are evaluating your process, not just whether the table sorts. A candidate who talks through this out loud looks like someone who's shipped real features under ambiguity — which is exactly what 4 YOE is supposed to signal.

Restate the problem in my own words — "So we have a table of records, and clicking a header should reorder the rows by that column's value, toggling direction on repeated clicks." This confirms I understood correctly, out loud, before committing to anything.
Ask the clarifying questions above — resolve the row-vs-column ambiguity first, since it's structural.
Decide what state actually needs to live in React vs what can be derived — this is the step most candidates skip, and it's where "state design" quality gets judged.
Sketch the component's props/data flow on paper or out loud — where does records come from, is this component controlled or does it own its data.
Only then write code — starting with state declarations, then the render, then the event handler last (handler is trivial once state shape is right).

Step 4: How many states, and why each one exists

For the version of this problem we scoped (single-column sort, toggle direction, row stays intact, static data passed in), the answer is: two pieces of state — not one, not three.

-----------------------------------

sortedRecords = [
  { id: 4, name: "Ishaan Joshi", age: 24, gender: "Non-binary", dob: "2002-11-15" },
  { id: 9, name: "Shreya Patel", age: 22, gender: "Non-binary", dob: "2004-12-14" },
]

If we stopped here, we'd have 2 empty <tr> tags. Correct row count, but no content inside them — no name, no age, nothing visible. That's the gap the inner loop fills.

Inner loop: columns.map((col) => ...) — running INSIDE each row

For each row from the outer loop, we now need to break that ONE object into 5 separate <td> cells — one per field. columns is just ['id', 'name', 'age', 'gender', 'dob'].

col = "id"      →  row["id"]      →  4                →  <td>4</td>
col = "name"    →  row["name"]    →  "Ishaan Joshi"   →  <td>Ishaan Joshi</td>
col = "age"     →  row["age"]     →  24               →  <td>24</td>
col = "gender"  →  row["gender"]  →  "Non-binary"      →  <td>Non-binary</td>
col = "dob"     →  row["dob"]     →  "2002-11-15"     →  <td>2002-11-15</td>

Why it must be nested — not two separate loops

You might wonder: why not just do sortedRecords.map() for rows and columns.map() for cells as two flat, separate loops? Because a <td> has to live inside a specific <tr> — a cell doesn't mean anything floating on its own; it belongs to exactly one row. The only way to express "this group of 5 cells belongs together as one row" in JSX is to build all 5 cells while you're inside that row's iteration — which is exactly what nesting the .map() calls does. The outer loop's job is "pick the record," the inner loop's job is "unpack that one record into cells" — and unpacking has to happen once per record, hence nested, not sequential.