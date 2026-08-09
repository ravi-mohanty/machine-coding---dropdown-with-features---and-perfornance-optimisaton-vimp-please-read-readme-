import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import { Accordion } from './Accordion';

function App() {
  const [data, setData] = useState({ nasa: [], user: [], name: [] });
  const [isOpen,setisOpen] = useState(null);

  function openAccordion(index) {
    setisOpen((prev) => (prev === index) ? null : index)   // we are not using any state here we are just checking what is the index, if it alredy open than do nothing if closed than open
    // how react will close alredy opened one--> it actully dont close , it repaints all the 3 accordions that it.
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const [nasa, user, name] = await Promise.all([
          axios('https://jsonplaceholder.typicode.com/users'),
          axios('https://jsonplaceholder.typicode.com/users'),
          axios('https://jsonplaceholder.typicode.com/users'),
        ]);
        setData({
          nasa: nasa.data,      // please refer the readme file to check this .
          user: user.data,
          name:  name.data,
        });
      } catch (error) {
        console.log("Fetch error:", error);
      }
    }
    fetchData();
  }, [])

   const accordions = [
    { title: 'NASA Team', data: data.nasa },
    { title: 'Random Users', data: data.user },
    { title: 'Space Crew', data: data.name },
  ];  



  return (
    <div>
      {accordions.map((it, index)=> (
        <Accordion key={index} title={it.title} val={it.data} isOpen={isOpen===index} openAccordion={() => openAccordion(index)} />
      ))}
    </div>
  )
}

export default App