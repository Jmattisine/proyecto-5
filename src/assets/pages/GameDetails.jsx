import React from 'react';

function GameDetails({ game }) {
  if (!game) return <div>No game selected.</div>;

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{game.name}</h2>
      <img src={game.background_image} alt={game.name} className="mb-4" />
      <p><strong>Rating:</strong> {game.rating}</p>
      <p><strong>Released:</strong> {game.released}</p>
      <p><strong>Description:</strong> {game.description_raw}</p>
    </div>
  );
}

export default GameDetails;
