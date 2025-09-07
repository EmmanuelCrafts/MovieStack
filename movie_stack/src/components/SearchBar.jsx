import search from "../assets/icon-search.svg";
import { useEffect, useState } from "react";
import iconMovies from "../assets/icon-nav-movies.svg"
import iconSeries from"../assets/icon-nav-tv-series.svg"
import { buildUrl } from "./api";
import { Link } from "react-router-dom";



export default function SearchBar({placeholder}) {
    const[query, setQuery] = useState('');
    const[results, setResults] = useState([]);
    const[error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
      if (query === "") {
        setResults([]);
        setHasSearched(false);
      }
    }, [query]);
    

     const handleSearch = async (e) => {
           e.preventDefault();
           setIsFetching(true);
           setError('');
           setHasSearched(true);
            try {
                const url = buildUrl('/search/multi', `query=${encodeURIComponent(query)}`);
                console.log("Fetching:", url);
     
                const response = await fetch(url);
             if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
             }
             const data = await response.json();
             setResults(data.results || []);
            } catch (err) {
               setError(`Error fetching search results: ${err.message}`);
            } finally {
              setIsFetching(false);
            }
         };
  return (
    <div>
      {/* show spinner and if no results is found show an error */}
      {isFetching && (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-blue-500 border-t-2 border-b-2"></div>
      </div>
    )}

   
      <div className=" flex items-center ml-4 mt-6 gap-4   w-[90%] md:w-[377px] md:mx-[25px]">
        <img src={search} alt="search icon" className="w-6 "/>
          <form onSubmit={handleSearch}>
             <input 
              type="text" 
              name="search"
              value={query}
              onChange={(e) =>setQuery(e.target.value)}
              placeholder={placeholder}
              // dont hardcode the pixels..check later
             className="  w-[388px]  py-1 px-1 text-white placeholder:text-white placeholder:opacity-[49.79%] md:placeholder:text-lg focus:outline-none border-0 focus:border-b  focus:border-blue-500"
             />
        </form>
      </div>
       {error && <div className="text-red-500/50 ml-4 mt-1 text-lg">Error: {error}</div>}

    { hasSearched && results.length === 0 && (
      <p className="text-gray-400 ml-4 mt-1 text-lg">No results found</p>
    )}
      <div className="text-white/80 my-4 ml-4 text-xl md:text-2xl">
        {results.length > 0 && (
              <h2>Found {results.length} results for '{query}'</h2>
        )}
      </div>
    {results.length > 0 && (
  <div className=" pt-4 mx-4 md:mx-[25px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 md:gap-x-8 grid gap-6"> 
    {results.map(item => (
      <div key={item.id} className="mb-4 ">
        <Link to={`/details/${item.media_type}/${item.id}`}>
          <img 
          src={
            item.backdrop_path 
              ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
              : "https://dummyimage.com/500x281/09f/fff&text=No+Image"
            } 
          alt={item.title || item.name} 
          className="w-full h-auto text-white rounded-lg" 
        />
        </Link>
        
        
        
        <div className="text-white/56 pt-1 "> 
          {item.media_type === "movie" ? (
            <div className="flex items-center h-[15px] gap-2 text-sm mb-1">
              <p>{item.release_date ? item.release_date.slice(0, 4) : item.first_air_date ? item.first_air_date.slice(0, 4) : "N/A"}</p>
              <ul className="flex gap-2 items-center justify-center">
                <li><img src={iconMovies} alt="Movie Icon" className="w-3 h-3" /></li>
                <li>Movie</li>
              </ul>
            </div>
          ) : item.media_type === "tv" ? (
            <div className="flex items-center h-[15px] gap-2 text-sm mb-1">
              <p>{item.first_air_date ? item.first_air_date.slice(0, 4) : item.release_date ? item.release_date.slice(0, 4) : "N/A"}</p>
              <ul className="flex items-center gap-2">
                <li><img src={iconSeries} alt="TV Series Icon" className="w-3 h-3" /></li>
                <li>TV Series</li>
              </ul>
            </div>
          ) : null}
          <h3 className="text-white text-lg font-semibold">{item.title || item.name}</h3>  
        </div>
      </div>
     ))}
   </div>
 )}
  </div>
  );
}