//------------------------------------------------------------let, var , const ------------------------------------------------------

// | Keyword | Scope          | Can Reassign? | Can Redeclare? | Hoisted?            | Initial Value |
// | ------- | -------------- | ------------- | -------------- | ------------------- | ------------- |
// | `var`   | **Function**   | ✅ Yes         | ✅ Yes          | ✅ Yes               | `undefined`   |
// | `let`   | **Block** `{}` | ✅ Yes         | ❌ No           | ✅ Yes (but trapped) | ❌ None (TDZ)  |
// | `const` | **Block** `{}` | ❌ No          | ❌ No           | ✅ Yes (but trapped) | ❌ None (TDZ)  |


// | Situation                              | Error Type               |
// | -------------------------------------- | ------------------------ |
// | Access `let`/`const` in TDZ            | `ReferenceError`         |
// | Access undeclared variable             | `ReferenceError`         |
// | Re-declare `let`/`const` in same scope | `SyntaxError`            |
// | Reassign `const`                       | `TypeError`              |
// | `typeof` undeclared var                | `"undefined"` (no error) |
// | `typeof` TDZ variable                  | `ReferenceError`         |


//-------------------------------------------------------- [==, ===] -----------------------------------------------------------

// === checks both value and type without any conversion. == performs type coercion first, which leads to unpredictable results, so I always use === by default.

5 === "5"     // false  (number vs string — types differ)
5 == "5"      // true   (string "5" becomes number 5, then compared)

0 === false   // false  (number vs boolean)
0 == false    // true   (false becomes 0, then 0 == 0)

null === undefined  // false
null == undefined   // true   (special case — they coerce to each other)

"" == false   // true   (empty string becomes 0, false becomes 0)
"" === false  // false

// gotcha to memorize

// [] == ""      // true
// [] == 0       // true
// [] == false   // true
// "" == false   // true

// // But:
// [] === ""     // false