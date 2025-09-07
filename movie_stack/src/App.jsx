import HomePage from './pages/Home'
import MoviesPage from './pages/MoviesPage'
import TvSeriesPage from './pages/TvSeriesPage'
import DetailsPage from './pages/DetailsPage'
import { Routes, Route} from 'react-router-dom'
import  "./index.css"

function App() {
  return (
    <>
    <div className='bg-blue-950  min-h-screen'>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movies' element={<MoviesPage />} />
      <Route path='/tv-series' element={<TvSeriesPage />} />
      <Route path='/details/:mediaType/:id' element ={<DetailsPage />} />
      <Route path='*' element={<div>404 Not Found</div>} />
    </Routes>
    </div>
    </>
  )
}

export default App
