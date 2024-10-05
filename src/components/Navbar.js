// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

 const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Router 6.4 and Above</h1>
        <div className="navbar-links">
        <NavLink  to="/" className="navbar-link">Home</NavLink>
        <NavLink to="about" className="navbar-link">About</NavLink>
        <NavLink to="contact" className="navbar-link">Contact</NavLink>
        <NavLink to="careers" className="navbar-link">Careers</NavLink>
       
        </div>
      </div>
    </nav>
  );
};
 export default Navbar;

