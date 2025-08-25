import search from "../assets/icon-search.svg";
export default function searchBar() {
  return (
    <div className=" flex items-center mx-4 gap-4 h-8 w-[400px]">
        <img src={search} alt="search icon" className="w-6 "/>
        <input type="text" name="search" placeholder="Search for movies or Tv series" />
    </div>
  );
} 