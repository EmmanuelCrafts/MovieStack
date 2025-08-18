import homeIcon from"../assets/icon-nav-home.svg"
import moviesIcon from"../assets/icon-nav-movies.svg"   
import tvIcon from"../assets/icon-nav-tv-series.svg"
import bookmarkIcon from"../assets/icon-nav-bookmark.svg"
import logoIcon from"../assets/logo.svg"
import avatar from"../assets/image-avatar.png"

const Navbar = () => {
 return (
        <nav className="flex justify-between  bg-blue-950 px-[17px] py-[17px] items-center">
    <div className="navbar__logo">
      <img src={logoIcon} alt="Logo" className="w-[32px] h-[25.6px]"/>
    </div>
    <ul className="flex items-center  gap-[24px]">
      <li>
        <img src={homeIcon} alt="Home" className="w-[16px] h-[16px]"/>
      </li>
      <li>
        <img src={moviesIcon} alt="Movies" className="w-[16px] h-[16px]"/>
      </li>
      <li>    
        <img src={tvIcon} alt="TV Series" className="w-[16px] h-[16px]" />
      </li>
      <li>
        <img src={bookmarkIcon} alt="Bookmarks" className="w-[14px]"/>
      </li>
    </ul>
    <div className="">
      <img src={avatar} alt="User Avatar" className="w-[24px] h-[24px] "/>
    </div>
  </nav>

 );
}
export default Navbar;