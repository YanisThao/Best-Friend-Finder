import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Retrieve the existing user data from local storage
    const userData = JSON.parse(localStorage.getItem("user"));

    // Update the isLoggedIn flag to false
    const updatedUserData = {
      ...userData,
      isLoggedIn: false,
    };

    // Save the updated user data back to local storage
    localStorage.setItem("user", JSON.stringify(updatedUserData));

    // Redirect user to homepage or login page
    navigate("/");
    alert("You have been logged out.");
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
