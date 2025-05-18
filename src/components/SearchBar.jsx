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
    <div className='w-full md:mt-6 mt-1 bg-neutral flex items-center rounded-lg md:p-3 p-1 overflow-hidden gap-4'>
        <input className={`w-full outline-none not-md:text-sm not-md:pl-2 text-white placeholder:text-white `} type="text"  placeholder='Search Movies' value={input} onChange={(e)=>{
 setinput(e.target.value) 
 }} onKeyUp={(e)=>{e.key == "Enter" && handleSearch()
  KeyboardEvent()
 }}/>
        <button className='bg-accent1 px-2 py-1 h-[fit-content] not-md:text-xs not-md:px-3 not-md:py-2 text-white rounded-lg cursor-pointer flex items-center ' onClick={handleSearch}>Search</button>
    </div>
    </> 
  )
}

export default SearchBar