import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token'); 
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    setMenuOpen(false); // Cerrar el menú al hacer logout
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" activeclassname="active" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          {!isAuthenticated && (
            <li>
              <NavLink to="/login" activeclassname="active" onClick={closeMenu}>
                Login
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to="/plushies" activeclassname="active" onClick={closeMenu}>
              Plushies
            </NavLink>
          </li>
          <li>
            <NavLink to="/rankings" activeclassname="active" onClick={closeMenu}>
              Rankings
            </NavLink>
          </li>
          <li>
            <NavLink to="/customize" activeclassname="active" onClick={closeMenu}>
              Customize
            </NavLink>
          </li>
          {isAuthenticated && (
            <li>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;