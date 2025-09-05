import search from "../assets/icon-search.svg";
import { useState } from "react";
import { buildUrl } from "./api";
import iconMovies from "../assets/icon-nav-movies.svg"
import iconSeries from"../assets/icon-nav-tv-series.svg"
import iconBookmark from"../assets/icon-bookmark-empty.svg"

export default function SearchBar() {
    const[query, setQuery] = useState('');
    const[results, setResults] = useState([]);
    
    
    const handleSearch = async (e) => {
      e.preventDefault();
      if (!query) return;

       try {
           const url = buildUrl('/search/multi', `query=${encodeURIComponent(query)}`);
           console.log("Fetching:", url);

           const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setResults(data.results || []);
       } catch (error) {
          console.error("Error fetching search results:", error);
          setResults([]);
       }
      
      
    }

  return (
    <div>
      <div className=" flex items-center ml-4 mt-6 gap-4 h-8  w-[254px] md:w-[377px] md:mx-[25px]">
        <img src={search} alt="search icon" className="w-6 "/>
          <form onSubmit={handleSearch}>
             <input 
              type="text" 
              name="search"
              value={query}
              onChange={(e) =>setQuery(e.target.value)}
              placeholder="Search for movies or TV series" 
             className=" w-[214px] md:w-[321px] text-white placeholder:text-white placeholder:opacity-[49.79%] md:placeholder:text-lg"
             />
        </form>
      </div>
    {results.length > 0 && (
  <div className=" pt-4 mx-4 md:mx-[25px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 md:gap-x-8 grid gap-6"> 
    {results.map(item => (
      <div key={item.id} className="mb-4 relative">
        <img 
          src={
            item.backdrop_path 
              ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
              : "https://dummyimage.com/300.png/09f/fff&text=No+Image"
            } 
          alt={item.title || item.name} 
          className="w-full h-auto rounded-lg" 
        />
        
        <div className="absolute top-1 right-2 w-8 h-8 bg-blue-950/50 rounded-full flex items-center justify-center">
          <img src={iconBookmark} alt="Bookmark Icon" className="w-[11.67px] h-[14px]" />
        </div>
        
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