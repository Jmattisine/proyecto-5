import React from 'react';
import GameCard from './GameCard';

function GameList({ games }) {
  if (games.length === 0) {
    return <p className="text-center mt-10 text-lg">No se encontraron juegos.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameList;

