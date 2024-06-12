import React, { useEffect, useState } from 'react';
import { getRankings } from '../api/api';

function RankingList() {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const response = await getRankings();
        setRankings(response.data);
      } catch (error) {
        console.error('Error fetching rankings', error);
      }
    };

    fetchRankings();
  }, []);

  return (
    <div>
      <h1>Rankings</h1>
      <ul>
        {rankings.map((ranking) => (
          <li key={ranking.id}>{ranking.plushieId} - {ranking.counter}</li>
        ))}
      </ul>
    </div>
  );
}

export default RankingList;
