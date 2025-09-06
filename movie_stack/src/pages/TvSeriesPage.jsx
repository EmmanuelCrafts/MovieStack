import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import PopularSeries from '../components/PopularSeries'

const HomePage = () => {
  return (
      <div className=" min-h-screen grid lg:grid-cols-[96px_1fr] grid-cols-1 gap-y-4 lg:gap-x-8 lg:py-4"> 
         <aside className='lg:sticky lg:top-0 lg:pb-4 lg:max-h-min '>
            <Navbar />
         </aside>
         <main className='overflow-x-auto  flex flex-col pb-4'>
            <SearchBar placeholder='Search for Series'/>
            <PopularSeries />
         </main>
      </div>
     
  )
}
export default HomePage;