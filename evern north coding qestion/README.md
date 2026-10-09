task: 

take fname, lname, age, id as input,
have a submit button --> when clicked all feilds should be empty AND THE entered records should be visble with label in a grid manner.
on click of the lable it should sort them in increasing order 
data should persist in refresh


// learning 

when taking the input onChange ={e.target.value} --> always comes from the obj.
when I enter 1 record --> how can I get each record one by one

for that I have used table tag --> table->thead->tr->th, now inside the table we have tbody->tr->td {here we have those records}

// now I have multiple records but I need to iterate over that so that i can show them.

// trick --> I have created an object --> key value pair, or I can also use a short hand obj. --> [...already existing entry, newOBj] in this way all new obj are gather in the form of an array [iterable] --> now when I am iterating over it and render the td[table data] for each record.

here we can see the  benifit of using the table element it automatically set the grid structre for us --> I need to add the border U have added the property to td[table data] not oin table row/table tbody

// another intresting observation --> to persist the data -> we are using local storage -> it only takes the string--> it obj/ array it convert into the string first, we have to store it with the key , -->  we have stored it now when it rendered we can use useEffet to get back the object and we can show that  --> for that we need to use localStorage.parse it will convert the string to the repective obj/array

const saved = localStorage.getItem("users");
    if (saved) {
      setUsers(JSON.parse(saved));
    }
 --> we can do it in this way .

 // now comes the sorting logic which is most intresting and quality valuable

 sorting logic when we click the label for the first time than --> asc order, if double click on the same lable --> desc 
 on click we need to upate the array as well . --> state is needed .
 what we want is --> we need to remeber the last state and the order as well [asc/desc] 

 so we are passing obj as the default vlaue for the sorted state variable --> direction -> "asc" and key as representing which label we needed -->  that is passed as a string from function call handle sorted that we will put into the <tr> 

 for that first we need to identify which direction we want to sort --> default is asc if we find the same key and the same direction than it means we are clicking for 2nd time we will toggle the direction 

 and according to that we will be sorting things and we will use the sorted array and store that array into the local storage and later we are getting that storage and displaying using jsx.