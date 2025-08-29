import search from "../assets/icon-search.svg";
export default function SearchBar() {
  return (
    <div className=" flex items-center ml-4 mt-6 gap-4 h-8  w-[254px] md:w-[377px] md:mx-[25px]">
        <img src={search} alt="search icon" className="w-6 "/>
        <input type="text" name="search" placeholder="Search for movies or TV series" className=" w-[214px] md:w-[321px] placeholder:text-white placeholder:opacity-[49.79%] md:placeholder:text-lg" />
    </div>
  );
} 