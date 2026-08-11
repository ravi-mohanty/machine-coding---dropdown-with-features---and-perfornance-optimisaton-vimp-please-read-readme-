import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState("Andhra Pradesh")
  const [change, setChange] = useState(false);
  const [state, setState] = useState( [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
])

function handleChange(e){
    console.log("typed value:", e.target.value);
  setValue( e.target.value )
}
function handleClick(){
   setChange((prev) => !prev)
}

function handleStateCLick(it){
  console.log("we are inside the this");
  setShow(it);
  setChange((prev) => !prev)

}

 const filteredState = state.filter((s) => (s.toLowerCase().includes(value.toLowerCase())))
  // setState(state.filter((s) => (s.toLowerCase().includes(s.toLowerCase()))));

  return (
   <div>
     <input type="text" value={value} onChange={handleChange} />
     <p>select your state</p>
     <div className="dropdown" onClick={handleClick}><span>{show}</span> v </div>
       { change && (
        filteredState.map((it, index) => (
          <div key={it} className='rows' onClick={() => handleStateCLick(it)}>
             <li>{it}</li>
          </div>
        )))
       }
   </div>
  )
}

export default App
