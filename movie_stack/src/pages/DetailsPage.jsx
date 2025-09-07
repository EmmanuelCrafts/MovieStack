import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { buildUrl } from "../components/api";

const DetailsPage = () => {
    const { mediaType, id} =useParams();
    const url = buildUrl(`/${mediaType}/${id}`);

    const {data, error, isLoading} = useQuery({
      queryKey: ['details', mediaType, id],
      queryFn: async () => {
          const response = await fetch(url);
          if (!response.ok) throw new Error('Failed to fetch details');
          return response.json();
      },
    });

    if (isLoading) return (
    <div className="flex items-center justify-center  h-screen">
      <div className="animate-spin rounded-full h-10 w-10 border-blue-500 border-t-2 border-b-2 rounded-full"></div>
    </div>
  )
    if (error) return <p>Error: {error.message}</p>
  return (
    <div>
         <aside className='lg:sticky lg:top-0 lg:pb-4 lg:max-h-min '>
            <Navbar />
         </aside>
       <main className=" relative bg-center bg-cover min-h-screen" 
            style={{
                   backgroundImage: `url(https://image.tmdb.org/t/p/w1280${data.backdrop_path})`,
            }}
       >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
         <div 
          className="text-white flex flex-col gap-4 relative z-20"
         >
          <div className="relative">
               <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title || data.name} className="  ml-4 mt-2  w-[70%]   h-[500px] md:h-[230px] md:w-[470px] rounded-lg "/>
               <div className="text-white absolute bg-black/60 top-4 right-[30%] rounded-full px-3 py-3">
                {data.vote_average && (
                  <span>{data.vote_average.toFixed(1)} / 10</span>
                )}
               </div>
          </div>
          <div  className="w-[90%] ">
            <h1 className="ml-4 font-extrabold text-2xl py-1 opacity-80">Title: {data.title || data.name}</h1>
           
            <div className="flex gap-2 ml-4 ">
              {data.genres?.map((item) => (
                <span
                  key={item.id}
                  className="bg-gray-800 px-2 py-2 px-1 rounded-full text-sm"
                > {item.name}
                </span>
              ))}
              
            </div>
             
             {data.original_language && (
              <h2 className="ml-5 py-1 text-sm opacity-80">
                <span className="font-bold text-lg ">Language: </span> 
              {data.original_language}</h2>
            )}

             {data.release_date && (
              <h2 className="ml-5 py-1 text-sm  opacity-80">
                <span className="font-bold text-lg ">Release Date: </span>
                 {data.release_date}</h2>
            )}
            <div className="ml-4 flex gap-2 py-1 justify-center ">
                 <h2 className="font-bold text-lg  opacity-80">Overview:</h2>
                <p className="w-[80%] px-2 ">{data.overview}</p>
            </div>
            
          </div>
           
        </div>
       </main>
    </div>
  )
}

export default DetailsPage