import React, { useState, useEffect } from "react";
import AdoptedPetsCard from "../Components/AdoptedPetsCard";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [adoptedPets, setAdoptedPets] = useState([]);
  const [username, setUsername] = useState("");

  // Load adopted pets and user data from localStorage on component mount
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    const user = JSON.parse(localStorage.getItem("user") || "{}"); // Assuming user data is stored under 'user'
    setAdoptedPets(userData.adoptedPets || []);
    setUsername(user.username || "User"); // Default to "User" if username is not available
  }, []);

  const removePet = (petId) => {
    const filteredPets = adoptedPets.filter((pet) => pet.id !== petId);
    const updatedUserData = {
      ...JSON.parse(localStorage.getItem("userData") || "{}"),
      adoptedPets: filteredPets,
    };
    localStorage.setItem("userData", JSON.stringify(updatedUserData));
    setAdoptedPets(filteredPets); // Update state to re-render component
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>{username}'s Profile</h1> {/* Display username */}
      </div>
      <div className="profile-info">
        {/* You can add user details or settings here if needed */}
      </div>
      <div className="adopted-pets">
        <h2>My Adopted Pets</h2>
        {adoptedPets.length > 0 ? (
          adoptedPets.map((pet, index) => (
            <AdoptedPetsCard key={index} pet={pet} onRemove={removePet} />
          ))
        ) : (
          <p>No adopted pets yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
