import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPetDetails } from "../Services/PetFinderService";
import "./PetProfile.css";

const PetProfile = () => {
  const [pet, setPet] = useState(null);
  const { petId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPetDetails(petId)
      .then((data) => setPet(data))
      .catch((error) => console.error("Error fetching pet details:", error));
  }, [petId]);

  const adoptPet = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.isLoggedIn) {
      alert("Please log in or register to adopt a pet.");
      navigate("/login");
      return;
    }

    let userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (!userData.adoptedPets) {
      userData.adoptedPets = [];
    }
    userData.adoptedPets.push(pet);
    localStorage.setItem("userData", JSON.stringify(userData));

    alert(`Congratulations! You have adopted ${pet.name}.`);
  };

  if (!pet) {
    return <div>Loading...</div>;
  }

  // Assuming `pet.tags` is an array of strings for the pet's characteristics
  const characteristics = pet.tags.join(", ");

  return (
    <div className="pet-profile-container">
      <header>
        <h1>{pet.name}</h1>
      </header>

      <section className="pet-images">
        {pet.photos.map((photo, index) => (
          <img key={index} src={photo.medium} alt={`Photo of ${pet.name}`} />
        ))}
      </section>

      <section className="pet-characteristics">
        <h2>About</h2>
        <div className="detail-item">
          <h3>Characteristics</h3>
          <p>{characteristics}</p>
        </div>
      </section>

      <section className="pet-details">
        <p>
          <strong>Status:</strong> {pet.status}
        </p>
        <p>
          <strong>Breed:</strong> {pet.breeds.primary}
        </p>
        <p>
          <strong>Gender:</strong> {pet.gender}
        </p>
        <p>
          <strong>Age:</strong> {pet.age}
        </p>
        <p>
          <strong>Size:</strong> {pet.size}
        </p>
      </section>

      {pet.attributes && (
        <section className="pet-traits">
          <h2>Traits:</h2>
          {Object.entries(pet.attributes).map(([key, value]) => (
            <p key={key}>
              <strong>{key.replace(/_/g, " ")}:</strong> {value ? "Yes" : "No"}
            </p>
          ))}
        </section>
      )}

      <section className="pet-description">
        <p>{pet.description}</p>
      </section>

      {pet.contact && (
        <section className="pet-contact">
          <h2>Contact Information</h2>
          <p>
            <strong>Email:</strong> {pet.contact.email}
          </p>
          <p>
            <strong>Phone:</strong> {pet.contact.phone}
          </p>
          <p>
            <strong>Address:</strong>{" "}
            {`${pet.contact.address.city}, ${pet.contact.address.state} ${pet.contact.address.postcode}`}
          </p>
        </section>
      )}

      <footer>
        <button onClick={adoptPet} className="adopt-me-btn">
          Adopt Me
        </button>

        <a
          href={pet.url}
          target="_blank"
          rel="noopener noreferrer"
          className="petfinder-btn"
        >
          Profile on Petfinder
        </a>
      </footer>
    </div>
  );
};

export default PetProfile;
