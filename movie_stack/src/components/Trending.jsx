import { buildUrl } from "./api";
import { useQuery } from "@tanstack/react-query";
import iconMovies from "../assets/icon-nav-movies.svg"
import iconSeries from"../assets/icon-nav-tv-series.svg"

const Trending = () => {
  const url = buildUrl('/trending/all/week');
  const { data, error, isLoading } = useQuery({
    queryKey: ['trending'],
    queryFn: () => fetch(url).then(res => res.json())
  }); 

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
        <h2>Trending</h2>
        {data.results.map(item => (
            <div key={item.id}>
                <img src={`https://image.tmdb.org/t/p/w342${item.backdrop_path}`} alt={item.title || item.name} className="w-[240px]  h-[140px] rounded-lg" />
                <h3>{item.title || item.name}</h3>
                 <p>{item.release_date ? item.release_date.slice(0, 4) : "N/A"}</p>
                {item.media_type === "movie" ? (
                   <div>
                    <ul>
                      <li>Movie</li>
                      <li><img src={iconMovies} alt="Movie Icon" className="w-4 h-4 " /></li>
                    </ul>
                  </div>
                ) : item.media_type === "tv" ? (
                   <div>
                     <ul>
                      <li>TV Series</li>
                      <li><img src={iconSeries} alt="TV Series Icon" className="w-4 h-4 inline" /></li>
                    </ul>
                   </div>
                ) : null}
            </div>
        ))}     
    </div>
  )
}
export default Trending;