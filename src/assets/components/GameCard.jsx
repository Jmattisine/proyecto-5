import React from 'react';

function GameCard({ game }) {
  return (
    <div className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <img
        src={game.background_image}
        alt={game.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
        <p className="text-sm text-gray-600">Rating: {game.rating}</p>
        <p className="text-sm text-gray-600">Lanzamiento: {game.released}</p>
      </div>
    </div>
  );
}

export default GameCard;

