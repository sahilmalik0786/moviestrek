import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom"

function MoviesCard({items}) {
  const {id , title , poster_path ,release_date} = items
  
    
  

  return (
   <Link to={`/movies/${id}`} >
    <div  className='md:h-72 h-80 md:w-52 w-40 snap-center snap-always group cursor-pointer rounded-xl  bg-slate-800/90 hover:bg-slate-700/90 hover:backdrop-blur transition-all hover:scale-105  flex flex-col p-2 shrink-0 '>
        <div className=' md:h-[85%] h-full w-full overflow-hidden  rounded-lg flex items-center justify-center'><img className='md:h-full h-full  w-full object-cover object-bottom text-white text-center text-md' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`no poster image for ${title}`} /></div>
        <div className='mt-3 flex flex-col '><h1 className='md:text-lg font-bold truncate text-accent1'>{title}</h1>
        <h2 className='text-slate-400 group-hover:text-slate-300 '>{release_date}</h2>
        </div> 
    </div>

    </Link>
  )
}

export default MoviesCard