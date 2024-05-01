import React from "react";
import { Navigate } from "react-router-dom";

// Assuming isAuthenticated function checks if the user is logged in
const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user && user.isLoggedIn;
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
