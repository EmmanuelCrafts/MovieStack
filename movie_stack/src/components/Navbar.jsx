import homeIcon from"../assets/icon-nav-home.svg"
import moviesIcon from"../assets/icon-nav-movies.svg"   
import tvIcon from"../assets/icon-nav-tv-series.svg"
import bookmarkIcon from"../assets/icon-nav-bookmark.svg"
import logoIcon from"../assets/logo.svg"
import avatar from"../assets/image-avatar.png"

const Navbar = () => {
 return (
    <div className="bg-blue-900 md:pt-6">
       <nav className="flex justify-between  bg-blue-950 px-[17px] py-[17px] items-center md:w-[720px] 
          md:h-18 md:px-[21px]  md:mx-auto md:rounded-xl md:py-[21px] lg:flex-col
           lg:ml-8 lg:w-24 lg:h-240 lg:px-7 lg:py-8 lg:rounded-[20px] ">
    <div className="">
      <img src={logoIcon} alt="Logo" className="w-[32px] h-[25.6px] "/>
    </div>
    <ul className="flex items-center lg:flex-col  gap-[24px] lg:mt-[6px]   lg:h-[200px]  lg:justify-between lg:mt-[97.6px]">
      <li>
        <img src={homeIcon} alt="Home" className="w-[16px] h-[16px] md:w-5 md:h-5"/>
      </li>
      <li>
        <img src={moviesIcon} alt="Movies" className="w-4 h-4 md:w-5 md:h-5"/>
      </li>
      <li>    
        <img src={tvIcon} alt="TV Series" className="w-4 h-4 md:w-5 md:h-5" />
      </li>
      <li>
        <img src={bookmarkIcon} alt="Bookmarks" className="w-[14px] md:w-[16.96px] md:h-5"/>
      </li>
    </ul>
    <div className="lg:mt-[515px]">
      <img src={avatar} alt="User Avatar" className="w-6 h-6 md:h-8 md:w-8 lg:w-[40px] lg:h-[40px]"/>
    </div>
  </nav>

    </div>

 );
}
export default Navbar;