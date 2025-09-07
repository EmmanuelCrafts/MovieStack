import Spinner from './components/Spinner';
import { Routes, Route} from 'react-router-dom'
import  "./index.css"
import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('./pages/Home'));
const MoviesPage =lazy(() => import('./pages/MoviesPage'));
const TvSeriesPage = lazy(() => import('./pages/TvSeriesPage'));
const  DetailsPage = lazy(() => import('./pages/DetailsPage'));

function App() {
  return (
    <>
    <div className='bg-blue-950  min-h-screen'>
   <Suspense fallback={<Spinner />}>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movies' element={<MoviesPage />} />
      <Route path='/tv-series' element={<TvSeriesPage />} />
      <Route path='/details/:mediaType/:id' element ={<DetailsPage />} />
      <Route path='*' element={<div>404 Not Found</div>} />
    </Routes>
    </Suspense>
    </div>
    </>
  )
}

export default App
