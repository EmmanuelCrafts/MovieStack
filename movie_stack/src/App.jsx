import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Trending from './components/Trending'
import Recommended from './components/Recommended'
import  "./index.css"

function App() {
  return (
    <>
    <div className='bg-blue-950  min-h-screen'>
      <Navbar />
      <SearchBar />
      <Trending />
      <Recommended />
    </div>
    </>
  )
}

export default App
