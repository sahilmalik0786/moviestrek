import React from 'react'
import SearchBar from './SearchBar'

function Header() {
  
  return (
    <div className='w-full  flex flex-col gap-2 '>
        <div className='md:h-70  w-full md:p-10 p-3 bg-slate-800 gap-3 flex  flex-col rounded-xl' >
            <h1 className='text-avocado-300 md:text-4xl text-xl font-bold'>Welcome</h1>
            <h3 className='text-xl text-slate-400'>Search and explore new Movies </h3>
            <SearchBar />
        </div>
      
    </div>
  )
}

export default Header