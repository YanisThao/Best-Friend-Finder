import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    // Retrieve the stored user data from local storage
    const storedData = localStorage.getItem("user");
    const userData = storedData ? JSON.parse(storedData) : null;

    // Check if the stored user data exists and passwords match
    if (
      userData &&
      userData.username === username &&
      userData.password === password
    ) {
      // Set isLoggedIn flag to true and save back to local storage
      userData.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(userData));

      // Redirect to homepage or dashboard
      navigate("/"); // Adjust as needed based on your routing
    } else {
      alert("Invalid credentials or user not found.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
