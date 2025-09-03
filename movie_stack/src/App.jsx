import PopularMovies from './components/PopularMovies'
import HomePage from './pages/Home'
import  "./index.css"
import PopularSeries from './components/PopularSeries'

function App() {
  return (
    <>
    <div className='bg-blue-950  min-h-screen'>
       <HomePage />
      <PopularMovies />
      <PopularSeries />
    </div>
    </>
  )
}

export default App
