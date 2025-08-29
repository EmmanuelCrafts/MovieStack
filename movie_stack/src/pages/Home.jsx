import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Trending from '../components/Trending'
import Recommended from '../components/Recommended'

const HomePage = () => {
  return (
      <div> 
         <Navbar />    
         <SearchBar />
         <Trending />
         <Recommended />
      </div>
     
  )
}
export default HomePage;