import { buildUrl } from "./api";
import {  useQuery} from "@tanstack/react-query";
import iconSeries from"../assets/icon-nav-tv-series.svg"
import { Link } from "react-router-dom";
const PopularSeries = () => {
  const movieUrl = buildUrl('/tv/popular');
  
  const { data, error, isLoading } = useQuery({
                queryKey: ['popularSeries'],
                queryFn: () => fetch(movieUrl).then(res => res.json())   
          }); 

  if (isLoading ) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

    const popular = data.results.map(item => ({ ...item, media_type: 'tv' }));

    const shuffled = popular.sort((a, b) => b.vote_average - a.vote_average);

  return (
    <div>
        
        <h2 className=" text-white text-xl font-bold my-4 h-6 ml-4 mb-5 md:mx-[25px]"> Popular Series</h2>
          <div className='mx-4 md:mx-[25px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 md:gap-x-8 grid  gap-6 '> 
             {shuffled.map(item => (
              <div key={item.id} className=" mb-4  ">
                <Link to={`/details/${item.media_type}/${item.id}`}>
                 <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt={item.title || item.name} className=" w-full h-auto rounded-lg "/>
                </Link>
                <div className=" text-white/56 pt-1 "> 
                {item.media_type === "tv" ? (
                   <div className="flex items-center  h-[15px] gap-2 text-sm mb-1" >
                     <p>{item.release_date ? item.release_date.slice(0, 4) : item.first_air_date ? item.first_air_date.slice(0, 4)  : "N/A"}</p>
                    <ul className="flex gap-2 items-center justify-center">
                      <li className=""><img src={iconSeries} alt="series icon" className="w-3 h-3" /></li>
                      <li>Series</li>
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
export default PopularSeries;