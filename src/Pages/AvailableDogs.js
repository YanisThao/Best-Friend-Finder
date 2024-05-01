import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Components/Modal";
import { fetchPets } from "../Services/PetFinderService";
import "./AvailableDogs.css";

const AvailableDogs = () => {
  const [dogs, setDogs] = useState([]);
  const [searchParams, setSearchParams] = useState({ breed: "", location: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDog, setSelectedDog] = useState(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSearch = () => {
    fetchPets("dog", searchParams)
      .then((response) => {
        setDogs(response.data.animals);
      })
      .catch((error) => console.error("Error fetching dogs:", error));
  };

  useEffect(() => {
    fetchPets("dog", searchParams)
      .then((response) => {
        setDogs(response.data.animals);
      })
      .catch((error) => console.error("Error fetching dogs:", error));
  }, [searchParams]);

  const handleAdoptClick = (dog) => {
    if (!user || !user.isLoggedIn) {
      setShowLoginPrompt(true); // Show login prompt if user is not logged in
      return;
    }
    setSelectedDog(dog);
    setIsModalOpen(true);
  };

  const handleLoginPromptClose = () => {
    setShowLoginPrompt(false);
  };

  const redirectToLogin = () => {
    navigate("/login"); // Redirect user to login
  };

  const saveAdoption = (pet) => {
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    const adoptedPets = userData.adoptedPets || [];
    adoptedPets.push(pet);
    localStorage.setItem(
      "userData",
      JSON.stringify({ ...userData, adoptedPets })
    );
    setIsModalOpen(false);
    alert(`Congratulations! You have adopted ${pet.name}.`);
  };

  return (
    <div>
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by breed..."
          value={searchParams.breed}
          onChange={(e) =>
            setSearchParams({ ...searchParams, breed: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="City/State or Zipcode..."
          value={searchParams.location}
          onChange={(e) =>
            setSearchParams({ ...searchParams, location: e.target.value })
          }
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="pets-list">
        {dogs.map((dog) => (
          <div key={dog.id} className="pet-card">
            <div className="pet-image">
              <img
                src={dog.photos[0]?.medium || "placeholder.jpg"}
                alt={`Picture of ${dog.name}`}
              />
            </div>
            <div className="pet-info">
              <h3>{dog.name}</h3>
              <p>Breed: {dog.breeds.primary}</p>
              <p>Age: {dog.age}</p>
              <p>Gender: {dog.gender}</p>
              <p>
                Location: {dog.contact.address.city},{" "}
                {dog.contact.address.state}
              </p>
              <button
                className="adopt-btn"
                onClick={() => handleAdoptClick(dog)}
              >
                Adopt Me!
              </button>
              <Link to={`/pets/${dog.id}`} className="view-profile-btn">
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedDog && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>Adopt {selectedDog.name}</h2>
          <p>
            Thank you for choosing to adopt {selectedDog.name}! Please confirm
            your details and complete the adoption process.
          </p>
          <button onClick={() => saveAdoption(selectedDog)}>
            Confirm Adoption
          </button>
        </Modal>
      )}

      {showLoginPrompt && (
        <Modal isOpen={showLoginPrompt} onClose={handleLoginPromptClose}>
          <h2>Login Required</h2>
          <p>
            You need to be logged in to adopt a pet. Please log in or register
            to continue.
          </p>
          <button onClick={redirectToLogin}>Login</button>
          <button onClick={() => navigate("/signup")}>Register</button>
        </Modal>
      )}
    </div>
  );
};

export default AvailableDogs;
