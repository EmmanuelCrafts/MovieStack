import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import  "./index.css"
import Trending from './components/Trending'

function App() {
  return (
    <>
    <div className='bg-blue-950 h-screen '>
      <Navbar />
      <SearchBar />
      <Trending />
    </div>
    </>
  )
}

export default App
