import React, { useState, useEffect } from 'react';
import { fetchPets } from './Services/PetFinderService'; 

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [location, setLocation] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [petType, setPetType] = useState('');

  useEffect(() => {
    applyFilters();
  }, []);

  const applyFilters = () => {
    fetchPets(location, zipCode, petType)
      .then(response => {
        // Assuming the API response structure has a data field containing the pets
        setPets(response.data.animals || []);
      })
      .catch(error => {
        console.error("Error fetching pets:", error);
      });
  };

  return (
    <div>
      <div className="filter-container">
        <input
          type="text"
          placeholder="State/City"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <select value={petType} onChange={(e) => setPetType(e.target.value)}>
          <option value="">All Pets</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          
        </select>
        <button onClick={applyFilters}>Apply Filters</button>
      </div>
      <div className="pet-list">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <h3>{pet.name}</h3>
            <p>Type: {pet.type}</p>
            <p>Breed: {pet.breeds.primary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetList;
