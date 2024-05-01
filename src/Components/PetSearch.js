import React, { useState } from "react";
import { fetchPetDetails } from "../Services/PetFinderService";

const PetSearch = ({ onSearch }) => {
  const [breed, setBreed] = useState("");
  const [location, setLocation] = useState("");


  const handleSearchClick = () => {
    onSearch(breed, location); // Call the parent component's search function
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location (Zip/City/State)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default PetSearch;
