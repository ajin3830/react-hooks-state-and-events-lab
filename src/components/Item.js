import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(true)
  // console.log(inCart, setInCart)
  // initially it returns true, but when clicked Add to Cart button, it returns false
  // with every click it changes between true and false

  function handleClickInCart() {
    // console.log('clicked')
    setInCart(inCart => !inCart);
  }
  
  // we have to store the value of ternary in a const
  const addToCart = inCart ? 'Add to Cart' : 'Remove From Cart';
  // console.log(addToCart)
  const className = inCart ? '' : 'in-cart'
  // we can set the state once and use it for diff function??

  return (
    <li className= {className} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClickInCart}>{inCart ? 'Add to Cart' : 'Remove From Cart'}</button>
    </li>
  );
}

export default Item;

// click the button to add an item and change li className to "in-cart"
// if item in car button text reads "Remove From Cart"
// if item not in cart button text reads "Add to Cart"
// add useState to item component