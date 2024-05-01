import React, { useState } from "react";
import "./SubmitPet.css";

const SubmitPet = () => {
  const [petInfo, setPetInfo] = useState({
    petName: "",
    petType: "",
    petBreed: "",
    petCharacteristics: "",
    petTraits: "",
    petImages: null,
    petVideos: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetInfo({
      ...petInfo,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setPetInfo({
      ...petInfo,
      petImages: e.target.files,
    });
  };

  const handleVideoChange = (e) => {
    setPetInfo({
      ...petInfo,
      petVideos: e.target.files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert file lists to array so it can be stringified
    const imagesArray = Array.from(petInfo.petImages || []);
    const videosArray = Array.from(petInfo.petVideos || []);

    // For demonstration, we will only save the file names to localStorage
    const petInfoForStorage = {
      ...petInfo,
      petImages: imagesArray.map((file) => file.name),
      petVideos: videosArray.map((file) => file.name),
    };

    // Save the petInfo object as a JSON string
    localStorage.setItem("petInfo", JSON.stringify(petInfoForStorage));

    console.log("Pet info saved to localStorage");
    // Rest of your submission logic...
  };

  return (
    <div className="submit-pet-page">
      <h1>Submit Your Pet's Information</h1>
      <form onSubmit={handleSubmit} className="submit-pet-form">
        {/* Pet's Name */}
        <label htmlFor="petName">Pet's Name:</label>
        <input
          type="text"
          id="petName"
          name="petName"
          value={petInfo.petName}
          onChange={handleChange}
          required
        />

        {/* Pet Type */}
        <label htmlFor="petType">Pet Type:</label>
        <select
          id="petType"
          name="petType"
          value={petInfo.petType}
          onChange={handleChange}
          required
        >
          <option value="">Select a type</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>

        {/* Pet Breed */}
        <label htmlFor="petBreed">Pet Breed:</label>
        <input
          type="text"
          id="petBreed"
          name="petBreed"
          value={petInfo.petBreed}
          onChange={handleChange}
          required
        />

        {/* Pet Characteristics */}
        <label htmlFor="petCharacteristics">Characteristics:</label>
        <textarea
          id="petCharacteristics"
          name="petCharacteristics"
          value={petInfo.petCharacteristics}
          onChange={handleChange}
          required
        ></textarea>

        {/* Pet Traits */}
        <label htmlFor="petTraits">Traits:</label>
        <input
          type="text"
          id="petTraits"
          name="petTraits"
          value={petInfo.petTraits}
          onChange={handleChange}
          required
        />

        {/* Pet Images */}
        <label htmlFor="petImages">Images:</label>
        <input
          type="file"
          id="petImages"
          name="petImages"
          onChange={handleImageChange}
          multiple
        />

        {/* Pet Videos */}
        <label htmlFor="petVideos">Videos:</label>
        <input
          type="file"
          id="petVideos"
          name="petVideos"
          onChange={handleVideoChange}
          multiple
        />

        <button type="submit" className="submit-pet-btn">
          Submit Pet Info
        </button>
      </form>
    </div>
  );
};

export default SubmitPet;
