import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";
import AvailableDogs from "./Pages/AvailableDogs";
import AvailableCats from "./Pages/AvailableCats";
import ContactPage from "./Pages/ContactPage";
import Give from "./Pages/Give";
import DonatePage from "./Pages/ShelterPage";
import SubmitPet from "./Pages/SubmitPet";
import PetProfile from "./Components/PetProfile";
import PrivateRoute from "./Components/PrivateRoute";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import AdoptPetPage from "./Pages/AdoptPetPage";
import ProfilePage from "./Pages/ProfilePage";
import AboutPage from "./Pages/AboutPage"; 

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route path="/profile/:petId" element={<PetProfile />} />
        <Route
          path="/adopt-pet"
          element={
            <PrivateRoute>
              <AdoptPetPage />
            </PrivateRoute>
          }
        />
        <Route path="/available-dogs" element={<AvailableDogs />} />
        <Route path="/available-cats" element={<AvailableCats />} />
        <Route path="/pets/:petId" element={<PetProfile />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/give" element={<Give />} />
        <Route path="/submit-pet-info" element={<SubmitPet />} />
        <Route path="/donate" element={<DonatePage />} />

        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
