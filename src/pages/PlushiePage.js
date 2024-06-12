// src/pages/PlushiePage.js
import React, { useEffect, useState } from 'react';
import { getPlushies, createPlushie, deletePlushie } from '../api/api';
import './PlushiePage.css';

function PlushiePage() {
  const [plushies, setPlushies] = useState([]);
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPlushies();
        console.log('Plushies Data:', response.data);
        setPlushies(response.data);
      } catch (error) {
        console.error('Error fetching plushies:', error);
        setErrorMessage('Error fetching plushies');
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createPlushie({ name, imageUrl });
      setPlushies([...plushies, response.data]);
      setName('');
      setImageUrl('');
      setSuccessMessage('Peluche agregado con éxito');
      setErrorMessage('');
    } catch (error) {
      console.error('Error creando peluche:', error);
      setErrorMessage('Error creando peluche: ' + error.message);
      setSuccessMessage('');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePlushie(id);
      setPlushies(plushies.filter(plushie => plushie._id !== id));
      setSuccessMessage('Peluche eliminado con éxito');
      setErrorMessage('');
    } catch (error) {
      console.error('Error eliminando peluche:', error);
      setErrorMessage('Error eliminando peluche: ' + error.message);
      setSuccessMessage('');
    }
  };

  return (
    <div className="plushie-page">
      <h2>Peluches</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="plushie-form">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="URL de Imagen"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <button type="submit">Agregar Peluche</button>
      </form>
      <ul>
        {plushies.map(plushie => (
          <li key={plushie._id}>
            <h3>{plushie.name}</h3>
            <img src={plushie.imageUrl} alt={plushie.name} />
            <button onClick={() => handleDelete(plushie._id)} className="delete-button"style={{ backgroundColor: '#eee', color: 'black', padding: '8px 12px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlushiePage;
