import React from "react";
import { Link } from "react-router-dom"; 
import "./LandingPage.css";
import landingImage from "../Images/Landing3.png";
import availableDogsImage from "../Images/Avaliable Dogs 2.jpg";
import availableCatsImage from "../Images/Available Cats 2.jpg";

function LandingPage() {
  return (
    <div className="landing-page">
      <div
        className="home-screen"
        style={{ backgroundImage: `url(${landingImage})` }}
      >
        <h1>Adopt a Dog or Cat Today!</h1>
       
      </div>
      <div className="row">
        <div className="column">
          <Link to="/available-dogs">
            {" "}
            {/* Link to the dogs page */}
            <img src={availableDogsImage} alt="Available Dogs" />
            <div className="text-overlay">Available Dogs</div>
          </Link>
        </div>
        <div className="column">
          <Link to="/available-cats">
            {" "}
            {/* Link to the cats page */}
            <img src={availableCatsImage} alt="Available Cats" />
            <div className="text-overlay">Available Cats</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
