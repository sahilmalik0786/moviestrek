import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import { fetchimages, fetchMovies, fetchrandomimages } from '../services/api'

function Header() {

  const [imagepath , setimagepath]= useState('')
  const [loader, setloader] = useState(null)
const randomnum = (d)=>{
  let c = Math.floor(Math.random()*d.length)
  return c
}

  useEffect(() => {


    fetchMovies('',"/trending/movie/day").then((d) => {
      setloader(true)
       const num = randomnum(d)
       
      
       fetchrandomimages(d[num].id).then(d=>{
        setimagepath(d.backdrops[0].file_path)
       })
    });
    
  }, []);

  
 
  return (
    <div className='w-full  flex flex-col gap-2 '>
        <div  
        style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${imagepath!=""&&imagepath}')`}}
        className='md:h-70  w-full bg-no-repeat bg-cover bg-center rounded-xl overflow-hidden' >
          <div className='overlay w-full h-full bg-black/30 md:p-10 p-3 gap-1 flex  flex-col '>
          <div className='flex flex-col gap-2 p-2 bg-black/30  w-fit md:p-2 rounded-lg md:backdrop-blur-xl '>
            <h1 className='text-avocado-300 md:text-4xl text-xl font-bold'>Welcome</h1>
            <h3 className='md:text-xl text-lg  md:text-slate-400 text-white'>Search and explore new Movies </h3>
            </div>
            <SearchBar />
          </div>
        </div>
      
    </div>
  )
}

export default Header