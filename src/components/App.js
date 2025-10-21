import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingList from "./ShoppingList";

function App() {
  const [items, setItems] = useState([
    { id: uuid(), name: "Apples", category: "Produce" },
    { id: uuid(), name: "Cheese", category: "Dairy" },
    { id: uuid(), name: "Cake", category: "Dessert" },
  ]);

  const [search, setSearch] = useState("");

  // add new item
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  // search filtering logic (done inside ShoppingList)
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ShoppingList
        items={filteredItems}
        onItemFormSubmit={handleAddItem}
        search={search}
        onSearchChange={setSearch}
      />
    </div>
  );
}

export default App;
