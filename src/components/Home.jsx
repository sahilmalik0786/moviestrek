import React, { useContext } from 'react'
import SearchBar from './SearchBar'
import MoviesCard from './MoviesCard'
import Navbar from './Navbar'
import SearchedMovies from './SearchedMovies'
import Loader from './Loader'
import MoviesSection from './MoviesSection'
import TrendingMovies from './TrendingMovies'
import { searchTerm } from '../context/Context'
import Header from './Header'
import { ErrorBoundary } from 'react-error-boundary'

  
function Home() {
 const [input , setinput , data , setData ,loading , setloading] =  useContext(searchTerm)
  


  return (
    
   <div className="w-full bg-slate-900 font-mono flex flex-col md:p-10 p-3 scroll-smooth ">
      
      <Navbar />
      <Header />
      {loading !=null && <SearchedMovies />}
      {loading && <Loader/>}
     <ErrorBoundary fallback={<p className='text-black text-xl'>Something went wrong</p>}>
  <MoviesSection />
</ErrorBoundary>
      <TrendingMovies />
      
     
    </div>
  )
}

export default Home