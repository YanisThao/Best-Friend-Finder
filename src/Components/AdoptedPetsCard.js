import React from "react";
import { Link } from "react-router-dom";
import "./AdoptedPetsCard.css"; 

const AdoptedPetsCard = ({ pet, onRemove }) => {
  return (
    <div className="pet-card">
      <div className="pet-image">
        <img
          src={pet.photo || "default-placeholder.png"}
          alt={pet.name}
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
      </div>
      <div className="pet-info">
        <h3>{pet.name}</h3>
        <p>Breed: {pet.breed}</p>
        <p>Age: {pet.age}</p>
        <p>Gender: {pet.gender}</p>
        <div className="pet-actions">
          <Link to={`/pets/${pet.id}`} className="button view-profile-btn">
            View Profile
          </Link>
          <button
            className="button remove-btn"
            onClick={() => onRemove(pet.id)}
          >
            Remove Pet
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdoptedPetsCard;
