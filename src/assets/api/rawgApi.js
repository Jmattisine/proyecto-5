const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = "https://api.rawg.io/api";

export const fetchGames = async (searchTerm = "") => {
  const url = `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchTerm}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("No se pudo obtener la información.");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error al buscar juegos:", error);
    return [];
  }
};




