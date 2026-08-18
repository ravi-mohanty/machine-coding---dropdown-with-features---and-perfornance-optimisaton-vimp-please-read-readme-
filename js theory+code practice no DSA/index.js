// ------------------------------IIFE --> immediatley invoked fucntion expression -------------------------------------------------------------------------

// "IIFE = a way to run code in its own private bubble, so its variables can never leak out and never get overwritten by anyone else's code."

// var counter = 0;      // ← THIS counter lives in the outer/global world

// (function () {
//   var counter = 0;    // ← THIS counter is a totally different, unrelated variable
//   counter++;           //    living inside the function's own private world
//   console.log(counter); // 1  (talking about the INNER one)
// })();

// console.log(counter); // 0  (talking about the OUTER one — untouched)



//---------------------------------------- fetch working and code with retry mechanism----------------------------------------------------

// async function fetched(retry = 3, delay=100) {
//  try{
//      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//      if(!res.ok) {
//         throw new Error('HTTP ERROR');   // this forces the catch block to execute by checking the status and throwing the error
//      }
//     const obj = await res.json();  
//     console.log(obj);
    
//  }
//  catch(e){
//   if(retry > 0){
//     setTimeout(() => {fetched(retry -1, delay)}, delay)
//   }
//   else{
//     console.log("failed after retry");
    
//   }
// }
// }

// fetched();



//working of fetch --> 
// when we fetch [browser api] --> it return a readable stream it is an asyn operation we use await--> it has status code 200 if success --> res.ok --> means we got the response , else status code 404, and res.ok --> false
// than after we convert it into json it is again an async task we use await before it.

//-------------------------------------------- promises and their methods ------------------------------------------

// defination: Promise is an object which represents the eventual completion of an async task .