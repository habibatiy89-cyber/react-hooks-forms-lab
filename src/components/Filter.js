import React from "react";

function Filter({ search, onSearchChange }) {
  function handleChange(e) {
    onSearchChange(e.target.value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default Filter;
