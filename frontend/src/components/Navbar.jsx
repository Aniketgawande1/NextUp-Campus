import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("auth"));
    setIsAuthenticated(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Campus<span className="text-yellow-400">Events</span>
      </h1>

      <ul className="hidden md:flex space-x-6">
        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
        <li><Link to="/banner" className="hover:text-yellow-400">Banner</Link></li>
        <li><Link to="/services" className="hover:text-yellow-400">Services</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
        <li><Link to="/dashboard" className="hover:text-yellow-400">Dashboard</Link></li>
      </ul>

      {isAuthenticated ? (
        <>
          <ul className="flex space-x-4">
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/create-event">Create Event</Link></li>
          </ul>
          <button 
            onClick={handleLogout} 
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </>
      ) : (
        <button 
          onClick={() => navigate("/register")} 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Register
        </button>
      )}

      <button onClick={toggleMenu} className="md:hidden text-gray-300 hover:text-white p-3">
        {isMenuOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
      </button>
    </nav>
  );
};

export default Navbar;
