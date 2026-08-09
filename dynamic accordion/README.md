npm create vite@latest . -- --template react --> command to install react in the same directory

nasa = {
  data: [ {id:1, name:"Leanne"}, {id:2, name:"Ervin"}, ... ],  // ← what you actually want
  status: 200,
  headers: {...},
  ...other axios stuff
}

That's why you write nasa.data — you're reaching inside the response object to pull out just the array of users.

command to change the remote url ==>  git remote set-url origin "url here"