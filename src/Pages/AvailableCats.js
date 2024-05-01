import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Components/Modal";
import { fetchPets } from "../Services/PetFinderService";
import "./AvailableCats.css";

const AvailableCats = () => {
  const [cats, setCats] = useState([]);
  const [searchParams, setSearchParams] = useState({ breed: "", location: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSearch = () => {
    fetchPets("cat", searchParams)
      .then((response) => {
        setCats(response.data.animals);
      })
      .catch((error) => console.error("Error fetching cats:", error));
  };

  useEffect(() => {
    fetchPets("cat", searchParams)
      .then((response) => {
        setCats(response.data.animals);
      })
      .catch((error) => console.error("Error fetching cats:", error));
  }, [searchParams]);

  const handleAdoptClick = (cat) => {
    if (!user || !user.isLoggedIn) {
      setShowLoginPrompt(true); // Show login prompt if user is not logged in
      return;
    }
    setSelectedCat(cat);
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
        {cats.map((cat) => (
          <div key={cat.id} className="pet-card">
            <div className="pet-image">
              <img
                src={cat.photos[0]?.medium || "placeholder.jpg"}
                alt={`Picture of ${cat.name}`}
              />
            </div>
            <div className="pet-info">
              <h3>{cat.name}</h3>
              <p>Breed: {cat.breeds.primary}</p>
              <p>Age: {cat.age}</p>
              <p>Gender: {cat.gender}</p>
              <p>
                Location: {cat.contact.address.city},{" "}
                {cat.contact.address.state}
              </p>
              <button
                className="adopt-btn"
                onClick={() => handleAdoptClick(cat)}
              >
                Adopt Me!
              </button>
              <Link to={`/pets/${cat.id}`} className="view-profile-btn">
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedCat && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>Adopt {selectedCat.name}</h2>
          <p>
            Thank you for choosing to adopt {selectedCat.name}! Please confirm
            your details and complete the adoption process.
          </p>
          <button onClick={() => saveAdoption(selectedCat)}>
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

export default AvailableCats;
