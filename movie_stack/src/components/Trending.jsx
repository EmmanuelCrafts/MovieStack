import { buildUrl } from "./api";
import { useQuery } from "@tanstack/react-query";
import iconMovies from "../assets/icon-nav-movies.svg"
import iconSeries from"../assets/icon-nav-tv-series.svg"
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const Trending = () => {
  const url = buildUrl('/trending/all/week');
  const { data, error, isLoading } = useQuery({
    queryKey: ['trending'],
    queryFn: () => fetch(url).then(res => res.json())
  }); 

  if (isLoading) return <Spinner />
  if (error) return <div className="text-white">Error: {error.message}</div>;
  

  return (
    <div>
        
        <h2 className=" text-white text-xl font-bold my-5  h-6 ml-4 md:mx-[25px]">Trending</h2>
          <div className='mx-4 md:mx-[25px] flex gap-4   md:gap-6 overflow-x-scroll  scroll-smooth   no-scrollbar'>
             {data.results.map(item => (
              <div key={item.id} className=" mb-4 w-[240px] md:w-[470px] flex-shrink-0  ">
                <Link to={`/details/${item.media_type}/${item.id}`}>
                   <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt={item.title || item.name} className=" w-[240px]  h-[140px] md:h-[230px] md:w-[470px] rounded-lg "/>
                </Link>
                
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
export default Trending;