import React, {useState} from "react";
import Item from "./Item";


function ShoppingList({ items }) {

  // console.log(items)
  
  const [selectedCategory, setSelectedCategory] = useState("All")
 
  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value)
    console.log(selectedCategory)
    // this logs previous state value: selected category due to Async
  }
  // !!!therefore you need to log it outside!!!
  console.log(selectedCategory)

  // filter takes in a true or false statement: if true add it to new list
  // if false keep looking
  // filter the items to only display the ones based on the selected category
  // const itemsToDisplay = items.filter(item => console.log(item))
  const itemsToDisplay = items.filter(item => {
    if (selectedCategory === "All")
      return true;
      return item.category === selectedCategory;
  })

  console.log(itemsToDisplay)
  // this logs real time value: items in the selected category
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

// select to filter item by category
// name state variable selectedCategory 
// this variable keeps track of the selected value  
// this variable determines which item to display in the shoping list
// use filter