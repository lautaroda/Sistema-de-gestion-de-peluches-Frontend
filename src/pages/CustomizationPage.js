import React, { useEffect, useState } from 'react';
import { getAllCustomizations, createCustomization, getPlushies, deleteCustomization, voteCustomization } from '../api/api';
import './CustomizationPage.css';

function CustomizationPage() {
  const [customizations, setCustomizations] = useState([]);
  const [plushies, setPlushies] = useState([]);
  const [formData, setFormData] = useState({ plushieId: '', color: '', accessory: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchCustomizations = async () => {
      try {
        const response = await getAllCustomizations();
        console.log('Customizations Data:', response.data);
        setCustomizations(response.data);
      } catch (error) {
        console.error('Error fetching customizations:', error);
      }
    };
    const fetchPlushies = async () => {
      try {
        const response = await getPlushies();
        setPlushies(response.data);
      } catch (error) {
        console.error('Error fetching plushies:', error);
      }
    };
    fetchCustomizations();
    fetchPlushies();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createCustomization(formData);
      setCustomizations([...customizations, response.data]);
      setFormData({ plushieId: '', color: '', accessory: '' });
      setSuccessMessage('¡Personalización creada con éxito!');
      setErrorMessage('');
    } catch (error) {
      console.error('Error al crear personalización:', error);
      setErrorMessage('Error al crear personalización: ' + error.message);
      setSuccessMessage('');
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleDeleteCustomization = async (id) => {
    try {
      await deleteCustomization(id);
      setCustomizations(customizations.filter(customization => customization._id !== id));
    } catch (error) {
      console.error('Error deleting customization:', error);
    }
  };

  const handleVote = async (id) => {
    try {
      await voteCustomization(id);
      setSuccessMessage('¡Voto registrado con éxito!');
      setErrorMessage('');
      const response = await getAllCustomizations();
      setCustomizations(response.data);
    } catch (error) {
      console.error('Error registrando el voto:', error);
      setErrorMessage('Error registrando el voto');
      setSuccessMessage('');
    }
  };

  return (
    <div className="customization-page">
      <h2>Personaliza Peluches</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <select name="plushieId" value={formData.plushieId} onChange={handleChange} required>
          <option value="">Seleccionar Peluche</option>
          {plushies.map(plushie => (
            <option key={plushie._id} value={plushie._id}>{plushie.name}</option>
          ))}
        </select>
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={formData.color}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="accessory"
          placeholder="Accesorio"
          value={formData.accessory}
          onChange={handleChange}
          required
        />
        <button type="submit">Crear Personalización</button>
      </form>
      <h3>Personalizaciones Actuales</h3>
      <ul>
        {customizations
          .filter(customization => customization.plushieId) // Filtrar personalizaciones con datos completos
          .map(customization => (
            <li key={customization._id} className="customization-item">
              <p>Peluche: {customization.plushieId.name}</p>
              <p>Color: {customization.color}</p>
              <p>Accesorio: {customization.accessory}</p>
              <button onClick={() => handleVote(customization._id)}>Votar</button>
              <button onClick={() => handleDeleteCustomization(customization._id)} className="delete-button">Eliminar</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CustomizationPage;