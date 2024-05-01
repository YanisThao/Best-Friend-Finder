import React, { useState, useEffect } from 'react';
import AuthService from '../Services/AuthService';
import { adoptPet } from '../utils'; // Assuming adoptPet is exported from a utilities or services file

const AdoptPetPage = ({ history }) => {
  const [pets, setPets] = useState([
    // Mock data, replace with data fetched from an API or other data source
    { id: 1, name: "Buddy", type: "Dog", photo: "url-to-dog-photo" },
    { id: 2, name: "Mittens", type: "Cat", photo: "url-to-cat-photo" },
  ]);

  const handleLogout = () => {
    AuthService.logout(() => {
      history.push('/');
    });
  };

  const handleAdopt = (pet) => {
    adoptPet(pet);
    // Optionally filter out the adopted pet from the state
    setPets(currentPets => currentPets.filter(p => p.id !== pet.id));
  };

  return (
    <div>
      <h1>Adopt a Pet</h1>
      <div>
        {pets.map(pet => (
          <div key={pet.id} style={{ margin: "10px", padding: "10px", border: "1px solid gray" }}>
            <h3>{pet.name}</h3>
            <p>Type: {pet.type}</p>
            <img src={pet.photo} alt={pet.name} style={{ width: "100px" }} />
            <button onClick={() => handleAdopt(pet)}>Adopt {pet.name}</button>
          </div>
        ))}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdoptPetPage;
