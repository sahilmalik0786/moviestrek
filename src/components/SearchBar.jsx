import React from 'react'
import { useContext  } from 'react'
import { searchTerm } from '../context/Context'
import { fetchMovies } from "../services/api";
import { useMediaQuery } from 'react-responsive'

function SearchBar() {
 const [input , setinput , data , setData ,loading , setloading , inp , setinp] =  useContext(searchTerm)

   const isDesktopOrLaptop = useMediaQuery({
     query: '(min-width: 1224px)'
   })

 const handleSearch = ()=>{
   if(!input.trim()) return 
     setloading(true)
     fetchMovies(input.trim()).then(d=>{
     
     setData(d)
     setinp(input)
     
     setinput('')
     setloading(prev => false)
     
  })

 }

 

  return (
    <>
    <div className='w-full md:mt-6 mt-1 bg-neutral flex items-center rounded-lg p-3 overflow-hidden gap-4'>
        <input className={`w-full outline-none text-white placeholder:text-white `} type="text"  placeholder='Search Movies' value={input} onChange={(e)=>{
 setinput(e.target.value) 
 }} onKeyUp={(e)=>{e.key == "Enter" && handleSearch()}}/>
        <button className='bg-accent1 px-2 py-1 h-[fit-content] text-white rounded-lg cursor-pointer flex items-center ' onClick={handleSearch}>Search</button>
    </div>
    </> 
  )
}

export default SearchBar