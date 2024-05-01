import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the submission of the contact form
    console.log(contact);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={contact.name}
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

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={contact.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="contact-submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
