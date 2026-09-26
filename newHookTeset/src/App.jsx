import { useState, useEffect, useMemo } from 'react';
import { takeOrders, Cart } from './Cart';

const items =[
    { name: "Wireless Mouse", price: 599 },
    { name: "Bluetooth Headphones", price: 1499 },
    { name: "Mechanical Keyboard", price: 2999 },
    { name: "USB-C Cable", price: 199 },
    { name: "Laptop Stand", price: 899 },
    { name: "Webcam HD", price: 1799 },
    { name: "Portable SSD 1TB", price: 5499 },
    { name: "Power Bank 20000mAh", price: 1299 },
    { name: "Smart Watch", price: 3999 },
    { name: "Gaming Mouse Pad", price: 399 },
    { name: "Noise Cancelling Earbuds", price: 2499 },
    { name: "Phone Tripod", price: 699 },
    { name: "Monitor 24 inch", price: 8999 },
    { name: "External Hard Drive 2TB", price: 4599 },
    { name: "Wireless Charger", price: 999 },
    { name: "Bluetooth Speaker", price: 1999 },
    { name: "Ring Light", price: 1299 },
    { name: "Laptop Backpack", price: 1599 },
    { name: "HDMI Cable", price: 299 },
    { name: "Desk Lamp LED", price: 799 },
  ]


function App() {
  const [product, setProduct] = useState("");               // instant typing value
  const [debouncedProduct, setDebouncedProduct] = useState(""); // delayed value

  // Step 1: Debounce logic — update debouncedProduct only after user pauses typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedProduct(product);
    }, 2000);

    return () => clearTimeout(timer); // cancel if user types again before 500ms
  }, [product]);

 

  // Step 2: Filter runs only when debouncedProduct changes
  const productArray = useMemo(() => {
    // console.log("Filtering ran for:", debouncedProduct);
    return items.filter((it) =>
      it.name.toLowerCase().includes(debouncedProduct.toLowerCase())
    );
  }, [debouncedProduct]);
    // console.log(productArray, "this is product array");


  return (
    <div>
      <input
        type="text"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        placeholder="Search product..."
      />

      <ul>
        {productArray.map((item) => (
          <li key={item.name} >
            {item.name} - ₹{item.price}
            <button onClick={() => takeOrders(item)}>+</button>
            <button>-</button>
          </li>
        ))}
      </ul>
      <Cart />
    </div>
   
  );
}

export default App;
