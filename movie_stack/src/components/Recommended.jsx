import { buildUrl } from "./api";
import { useQueries} from "@tanstack/react-query";
import iconMovies from "../assets/icon-nav-movies.svg"
import iconSeries from"../assets/icon-nav-tv-series.svg"
import iconBookmark from"../assets/icon-bookmark-empty.svg"

const Recommended = () => {
  const movieUrl = buildUrl('/movie/top_rated');
  const SeriesUrl = buildUrl('/tv/top_rated');

  const [moviesQuery, seriesQuery] = useQueries({
    queries: [
                { queryKey: ['MoviesRated'],
                  queryFn: () => fetch(movieUrl).then(res => res.json()) 
                },

                {  queryKey: ['SeriesRated'],
                  queryFn: () => fetch(SeriesUrl).then(res => res.json())
                } 
              ]
    
  }); 

  if (moviesQuery.isLoading || seriesQuery.isLoading) return <div>Loading...</div>;
  if (moviesQuery.error || seriesQuery.error) return <div>Error: {error.message}</div>;

    const moviesData = moviesQuery.data.results.map(item => ({ ...item, media_type: 'movie' }));
    const seriesData = seriesQuery.data.results.map(item => ({ ...item, media_type: 'tv' }));

    const topRated = [...moviesData, ...seriesData];
    const shuffled = topRated.sort((a, b) => b.vote_average - a.vote_average);

  return (
    <div>
        
        <h2 className=" text-white text-xl font-bold my-4 h-6 ml-4 md:mx-[25px]">Recommended for you</h2>
          <div className='mx-4 md:mx-[25px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  grid '>
             {shuffled.map(item => (
              <div key={item.id} className=" mb-4 w-[224px] md:w-[252px]  lg:w-[434px] relative ">
                <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt={item.title || item.name} className=" w-[224px]  h-[144px]   md:w-[252px] lg:w-[434px]  lg:h-[214px] rounded-lg "/>
                <div className="absolute top-1 right-2 w-8 h-8 bg-blue-950/50 rounded-full flex items-center justify-center ">
                   <img src={iconBookmark} alt="Bookmark Icon" className=" w-[11.67px] h-[14px]" />
                </div>
                <div className=" text-white/56 pt-1 "> 
                {item.media_type === "movie" ? (
                   <div className="flex items-center  h-[15px] gap-2 text-sm mb-1" >
                     <p>{item.release_date ? item.release_date.slice(0, 4) : item.first_air_date ? item.first_air_date.slice(0, 4)  : "N/A"}</p>
                    <ul className="flex gap-2 items-center justify-center">
                      <li className=""><img src={iconMovies} alt="Movie Icon" className="w-3 h-3" /></li>
                      <li>Movie</li>
                    </ul>
                  </div>
                ) : item.media_type === "tv" ? (
                   <div className="flex items-center  h-[15px] gap-2 text-sm mb-1" >
                      <p>{item.first_air_date ? item.first_air_date.slice(0, 4) : item.release_date ? item.release_date.slice(0, 4) : "N/A"}</p>
                     <ul className="flex items-center  gap-2">
                      <li><img src={iconSeries} alt="TV Series Icon" className=" w-3 h-3" /></li>
                      <li>TV Series</li>
                    </ul>
                   </div>
                ) : null}
                <h3 className=" text-white text-lg -semibold">{item.title || item.name}</h3>  
                </div>
            
              </div>
             ))} 
          </div>
           
    </div>
  )
}
export default Recommended;