import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center mb-6">
      <input
        type="text"
        placeholder="Buscar videojuegos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-1/2 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white font-bold rounded-r-md hover:bg-blue-700 transition-all"
      >
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
