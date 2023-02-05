import React, {useState}  from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  
  // handleClickDarkMode function VERSION 1
  // instead of true/false we could replace with dark/light
  // here we're setting initial state to light
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleClickDarkMode(e) {
    // setIsDarkMode(isDarkMode => console.log(isDarkMode));
    // ^^this returns false
    setIsDarkMode(isDarkMode => !isDarkMode)
  }
  

  // handleClickDarkMode function VERSION 2

  // const [isDarkMode, setIsDarkMode] = useState(true);

  // function handleClickDarkMode() {
  //   if (isDarkMode === true) {
  //     setIsDarkMode(false);
  //   } else {
  //     setIsDarkMode(true);
  //   }
  // }

  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClickDarkMode}>{isDarkMode ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );

}

export default App;

// For dark and light mode toggle:
// import useState hook and call at top level ONLY
// create state variable and replace false on const appClass
// add event handler to dark mode button
