const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export function buildUrl(endpoint, params = '') {
    return `${BASE_URL}${endpoint}?api_key=${API_KEY}&${params}`;
};


