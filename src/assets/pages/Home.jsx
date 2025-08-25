import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import GameList from '../components/GameList';
import { fetchGames } from '../api/rawgApi'; // ✅ esta es la función que se debe usar



function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query = '') => {
    setLoading(true);
    try {
      const data = await fetchGames(query || 'popular');
      setGames(data);
    } catch (error) {
      console.error('Error al buscar juegos:', error);
      setGames([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleSearch(); // ✅ se carga al inicio con "popular"
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-4xl font-bold text-center pt-8">🎮 Game Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p className="text-center text-lg mt-6">Cargando juegos...</p>
      ) : (
        <GameList games={games} />
      )}
    </div>
  );
}

export default Home;

