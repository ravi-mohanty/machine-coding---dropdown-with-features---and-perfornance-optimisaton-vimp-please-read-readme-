import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [age, setage] = useState('');
  const [id, setid] = useState('');
  const [users, setUsers] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [sorted, setsorted] = useState({key: null, direction: 'asc'});

  // Load saved data on first render
  useEffect(() => {
    const saved = localStorage.getItem("users");
    if (saved) {
      setUsers(JSON.parse(saved));
    }
  }, []);

  function handleSubmit() {
    const userObj = { fname, lname, age, id };
    const updatedUsers = [...users, userObj];

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setfname('');
    setlname('');
    setage('');
    setid('');
  }

  // function sorted({id}){
  //    if(id !=id){
  //      const newSorted = [...users].sort((a, b) => a[fname] < b[fname] ? 1 : -1)
  //        setUsers(newSorted);
  //    }  
  //    else {
  //            const newSorted = [...users].sort((a, b) => a[fname] > b[fname] ? 1 : -1)         
  //    }
  // }

  function handlesort(key) {
    console.log("sorted");
    
    let direction = 'asc';
    if(sorted.key === key && sorted.direction === 'asc'){
      direction = 'desc';
    }
    setsorted({key, direction});
     const sortedArray = [...users].sort((a, b) => {
    if (direction === 'asc') {
      return a[key] > b[key] ? 1 : -1;
    } else {
      return a[key] < b[key] ? 1 : -1;
    }
  });

  setUsers(sortedArray);
    localStorage.setItem("users", JSON.stringify(sortedArray))
  }

  return (
    <div>
      <input type="text" value={fname} onChange={(e) => setfname(e.target.value)} placeholder="First Name" />
      <input type="text" value={lname} onChange={(e) => setlname(e.target.value)} placeholder="Last Name" />
      <input type="text" value={age} onChange={(e) => setage(e.target.value)} placeholder="Age" />
      <input type="text" value={id} onChange={(e) => setid(e.target.value)} placeholder="ID" />
      <button onClick={handleSubmit}>Submit</button>

      <table>
        <thead>
          <tr >
            <th onClick={()=> handlesort("fname")}>First Name</th>
            <th onClick={()=> handlesort("lname")}>Last Name</th>
            <th onClick={()=> handlesort("age")}>Age</th>
            <th onClick={()=> handlesort("id")}>ID</th>
          </tr>
        </thead>
        <tbody>
          {users.map((it, index) => (
            <tr key={index} >
              <td className="layout">{it.fname}</td>
              <td className="layout">{it.lname}</td>
              <td className="layout">{it.age}</td>
              <td className="layout">{it.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;