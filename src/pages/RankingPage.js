// src/pages/RankingPage.js
import React, { useEffect, useState } from 'react';
import { getRankings } from '../api/api';
import './RankingPage.css';

function RankingPage() {
  const [rankings, setRankings] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const response = await getRankings();
        setRankings(response.data);
      } catch (error) {
        console.error('Error al obtener el ranking:', error);
        setErrorMessage('Error al obtener el ranking');
      }
    };
    fetchRankings();
  }, []);

  const renderRankingInfo = (ranking) => (
    <div className="ranking-info">
      <p><strong>Peluche:</strong> {ranking.customizationId.plushieId.name}</p>
      <p><strong>Color:</strong> {ranking.customizationId.color}</p>
      <p><strong>Accesorio:</strong> {ranking.customizationId.accessory}</p>
      <p><strong>Votos:</strong> {ranking.counter}</p>
    </div>
  );

  return (
    <div className="ranking-page">
      <h2>Ranking de Personalizaciones</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <ul>
        {rankings
          .filter(ranking => ranking.customizationId && ranking.customizationId.plushieId) // Filtrar rankings con datos completos
          .map((ranking) => (
            <li key={ranking._id} className="ranking-item">
              {renderRankingInfo(ranking)}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default RankingPage;