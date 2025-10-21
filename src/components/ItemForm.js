import React, { useState } from "react";

function ItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Dessert");

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === "") return;

    const newItem = { name, category };
    onAddItem(newItem);
    setName("");
    setCategory("Dessert");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Dessert">Dessert</option>
        <option value="Fruit">Fruit</option>
        <option value="Vegetable">Vegetable</option>
      </select>

      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
