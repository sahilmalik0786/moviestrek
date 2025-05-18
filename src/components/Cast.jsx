import React, { useState } from 'react'

function Cast({details}) {
  const {profile_path , name ,character} = details
  console.log(details)

  return (
    <div className={`md:w-64 md:h-80 w-40 h-72  bg-linear-to-r from-cyan-500/30 to-blue-500/20 flex flex-col  rounded-2xl  p-2 shrink-0`}>
     <div className='w-full h-10/12 md:p-1 overflow-hidden  items-center flex flex-col'>
        <img className='object-cover md:object-center flex text-wrap items-center text-white w-11/12 h-full  rounded-2xl' src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={`no Image of ${name}`} />
     </div>
     <div className='  md:h-2/12 h-1/4 flex items-center flex-wrap md:mb-1 justify-start md:px-3' ><h1 className='text-white md:text-xl text-xs text-wrap md:tracking-tight tracking-tighter'>{name} <br className='not-md:hidden' /> <span className='text-xs '>as <span className='md:text-sm text-xs text-avocado-300 underline'>{character}</span></span> </h1></div>
    </div>
  )
}

export default Cast