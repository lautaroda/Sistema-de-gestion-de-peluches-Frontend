import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Bienvenidos a las Clasificaciones de Personalización de Peluches</h1>
          <p>Descubrí las personalizaciones de peluches más populares y creá tus propios diseños únicos!</p>
          <Link to="/customize" className="hero-button">Empezar</Link>
        </div>
      </header>
      <section className="info-section">
        <div className="info-card">
          <h2>Clasificaciones</h2>
          <p>Consultá las personalizaciones de peluches mejor valoradas y votá por tus favoritas.</p>
          <Link to="/rankings" className="info-button">Ver Clasificaciones</Link>
        </div>
        <div className="info-card">
          <h2>Personalizar</h2>
          <p>Creá tu propia personalización de peluche y compartila con la comunidad.</p>
          <Link to="/customize" className="info-button">Empezar a Personalizar</Link>
        </div>
        <div className="info-card">
          <h2>Peluches</h2>
          <p>Explorá nuestra colección de peluches disponibles para personalización.</p>
          <Link to="/plushies" className="info-button">Ver Peluches</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;