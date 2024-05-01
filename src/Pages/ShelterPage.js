import React, { useState } from "react";
import SearchShelters from "../Components/SearchShelters";
import { fetchShelters } from "../Services/PetFinderService";
import "./ShelterPage.css";

function DonatePage() {
  const [shelters, setShelters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = (location) => {
    setLoading(true);
    setError("");
    fetchShelters(location)
      .then((response) => {
        console.log("API Response:", response); // Add this to log the raw response
        if (!response.organizations) {
          throw new Error("Unexpected API response structure");
        }
        setShelters(response.organizations);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof SyntaxError) {
          console.error("Error in API structure:", error);
          setError("Unexpected data structure from API.");
        } else {
          console.error("Network or other error:", error);
          setError("Failed to fetch shelters due to network or server error.");
        }
        setLoading(false);
      });
  };

  return (
    <div className="donate-page">
      <SearchShelters onSearch={handleSearch} />
      <div className="shelter-results">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && shelters.length === 0 && (
          <p>No shelters found. Try a different location.</p>
        )}
        {shelters.map((shelter, index) => (
          <div key={index} className="shelter-item">
            <h3>{shelter.name}</h3>
            {shelter.address && (
              <p>{`${shelter.address.address1 || "No address"} , ${
                shelter.address.city
              }, ${shelter.address.state} ${shelter.address.postcode}`}</p>
            )}
            {shelter.photos && shelter.photos.length > 0 && (
              <img
                src={shelter.photos[0].medium}
                alt={`${shelter.name} photo`}
              />
            )}
            <p>
              <a href={shelter.url} target="_blank" rel="noopener noreferrer">
                Visit Shelter Page
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DonatePage;
