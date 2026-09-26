import { useState } from "react";
   

function Cart({item}) {
    const [myCart, setMyCart] = useState([]);

    function takeOrders(item) {
  setMyCart((prevCart) => [...prevCart, item]);
    }

console.log("here");
          
    

    return (
        <div>{
            myCart.map((it, index) => (
                <div key={index}>{it.name}</div>
            ))
        }</div> 
    )
}

export {takeOrders, Cart} 