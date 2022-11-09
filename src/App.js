import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  //const [count, setCount] = useState(0);

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (itemName, itemPrice) => {
    console.log(cart);
    setCart([...cart, itemName])
    setTotalPrice(totalPrice + itemPrice);
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        //<p>Bakery Item {index}</p> // replace with BakeryItem component
       <BakeryItem prop1={item} updateCart={addToCart}/>
      ))}

    

      <div>
        <h2>Cart</h2>
        {cart}
        <p>Total Price = {totalPrice}</p>
      </div>
    </div>
  );
}

export default App;
