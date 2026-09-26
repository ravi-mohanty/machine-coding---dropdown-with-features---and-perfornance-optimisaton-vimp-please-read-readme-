
Rect js  ---->  recquirements 

Search box — user types a product name to filter.
Product list — hardcode an array of ~20 products (name + price).
Debounced filtering — don't filter on every keystroke instantly; wait 500ms after user stops typing (simulate real search behavior).
Expensive filter logic — filtering the list should NOT re-run on every re-render, only when search text or product list actually changes.
Add to Cart button on each product — clicking it adds that product to a cart list shown separately.
Cart child component — separate component that receives onAddToCart function as a prop. This child must NOT re-render unless its own props actually change.
Render counter — show how many times the main component has re-rendered, but this counter itself must NOT cause a re-render when updated.
Focus button — a button that, when clicked, moves cursor focus directly into the search input.

//---------------------------------------------------------------------------------------------------------------


// I got stuck at the search input box forgot there is e.target.element is there to get store the input to the state variable

// when to call the fucntion is also the teask --> claude gave me an idea, but when I enter the key stroke I always find the first key stroke missing , as the fucntion will run before the product[ individual item] state updates hence for first key stoke we are not able to see the seached keystoke val only able to see the entire array . --->  this is called stale closure

// how to use optimised filtered list --> when we are searching some name we are storing that into some state, now after the render we need to display the searched results so we are using useEffect and pass this state variable in the dependency so that it trigger the useEffect every time when there is change in the dependecy array variable / if the search variabe changes.

we also have a cleanup code inside it so that we when there is a timer alredy running and user is typing fast so it be within the paused timmer it will clear that timmer hence there is not call back registered, in case of last keystoke done timer will get registed and call back will be executing , and now the state variable is storing all the alphabets what is searched, and this lead to trigger the useMemo as this state variable is passed as dep. array to that and it does the filtering .

// now the case for slow typing it always hit the timmer hence every time useMemon is called

check the cyclic dependecy can be cured by JSON.parse method