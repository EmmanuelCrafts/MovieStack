import { buildUrl } from "./api";
import { useQuery } from "@tanstack/react-query";

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
            </div>
        ))}     
    </div>
  )
}
export default Trending;