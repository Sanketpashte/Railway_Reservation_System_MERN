import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import trainLogo from "../img/icon.png"; // Replace with the actual path to your train logo

const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null); // Update the state to trigger re-render
  };

  if (user) {
    return (
      // Header when logged in 
      <div className="flex justify-between items-center xl:justify-end space-x-2  md:-mb-2  p-3  bg-dark">
        <h2 className="text-light align-center"> Mono Rail </h2>
        <div className="flex items-center">
          <img src={trainLogo} alt="Train Logo" className="h-8 w-8 mr-2 " />
          <span className="bg-[#eca74e] hover:bg-[#ee5e5f] duration-200 text-white font-bold py-2 px-4 rounded mt-2 mr-6 ml-4 mx-2">
            {user.fullName}
          </span>
        </div>
        <span
          onClick={handleLogout}
          className="bg-[#eca74e] hover:bg-[#ee5e5f] duration-200 text-white font-bold py-2 px-4 rounded mt-2 mr-6 ml-4 mx-2"
        >
          Log Out
        </span>
        <Link
          to="/about-us"
          className="bg-[#eca74e] hover:bg-[#ee5e5f] duration-200 text-white font-bold py-2 px-4 rounded mt-2 mr-6 ml-4 mx-2"
        >
          About Us
        </Link>
      </div>
    );
  }

  // Header Buttons when not logged in
  return (
    <div className="flex justify-between items-center xl:justify-end space-x-2  md:-mb-2  p-3  bg-dark">

      <h2 className="text-light align-center"> Mono Rail </h2>
   
      <div className="flex items-center">
      <div>
      
      </div>
      
        <img src={trainLogo} alt="Train Logo" className="h-8 w-8 mr-2" />
        <Link
          to="/login"
          className="bg-[#eca74e] hover:bg-[#ee5e5f] duration-200 text-white font-bold py-2 px-4 rounded mt-2 mr-6 ml-4 mx-2"
        >
          Log In
        </Link>
        <br></br>
        <br></br>
      
        <Link
          to="/signup"
          className="bg-[#eca74e] hover:bg-[#ee5e5f] duration-200 text-white font-bold py-2 px-4 rounded mt-2 mr-4 mx-2"
        >
          Sign Up
        </Link>
        <Link
          to="/about-us"
          className="bg-[#eca74e] hover:bg-[#ee5e5f] duration-200 text-white font-bold py-2 px-4 rounded mt-2 mr-4 mx-2"
        >
          About Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
