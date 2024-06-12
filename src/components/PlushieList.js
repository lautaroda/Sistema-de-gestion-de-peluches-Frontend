import React, { useEffect, useState } from 'react';
import { getPlushies } from '../api/api';
import './PlushiePage.css';

function PlushiePage() {
  const [plushies, setPlushies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPlushies();
        setPlushies(response.data);
      } catch (error) {
        console.error('Error fetching plushies:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="plushie-page">
      <h2>Plushies</h2>
      <ul>
        {plushies.map(plushie => (
          <li key={plushie._id}>
            <h3>{plushie.name}</h3>
            <img src={plushie.imageUrl} alt={plushie.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlushiePage;