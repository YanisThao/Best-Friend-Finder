import React, { useState } from "react";

function SearchShelters({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSearchClick = () => {
    onSearch(input); // Trigger the search using the input location
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Zipcode"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default SearchShelters;
