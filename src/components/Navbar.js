import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token'); // Verifica si hay un token

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <ul>
        <li>

        </li>
        {!isAuthenticated && (
          <li>
            <NavLink to="/login" activeclassname="active">
              Login
            </NavLink>
          </li>
        )}
        <li>
          <NavLink to="/plushies" activeclassname="active">
            Plushies
          </NavLink>
        </li>
        <li>
          <NavLink to="/rankings" activeclassname="active">
            Rankings
          </NavLink>
        </li>
        <li>
          <NavLink to="/customize" activeclassname="active">
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
    </nav>
  );
};

export default Navbar;