import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Give.css";

const GivePage = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
    localStorage.setItem("personalInfo", JSON.stringify(contact)); // Update here to use contact
    navigate("/submit-pet-info");
  };

  return (
    <div className="give-page">
      <h1>Looking to give up your pet?</h1>
      <form onSubmit={handleSubmit} className="give-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={contact.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="address">Address:</label>
        <input
          type="address"
          id="address"
          name="address"
          value={contact.address}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="phone"
          id="phone"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Reason:</label>
        <textarea
          id="message"
          name="message"
          value={contact.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="give-submit">
          Continue
        </button>
      </form>
    </div>
  );
};

export default GivePage;
