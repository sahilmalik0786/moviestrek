import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar({c}) {
  const navigate =  useNavigate()
  
 const colors = ["-slate-800" , "-accent1" , "-avocado-300" , "-red-400", "-purple-500" ,"-green-700"]

  return (
    
    <nav className={`w-full bg-linear-to-r  from-slate-500/20 md:via-slate-900/40 via-slate-700/20 from-0% md:via-10%  to-gray-800/20   md:py-2 not-md:h-16 flex items-center  border-white  md:px-4 px-2 mb-6 rounded-lg justify-between `}>
        <div className=' w-24 flex items-center rounded-xl bg-black/20 '><img onClick={()=> navigate('/')} className='object-cover w-full cursor-pointer' src="/logo.png" alt="" /></div>
        <div className='flex gap-5 text-white items-center md:pr-10 '><h1 onClick={()=> navigate('/')} className='cursor-pointer relative after:absolute select-none inline-block after:bg-white after:w-0 after:h-1 after:bottom-0 after:left-0 hover:after:w-full transition-all not-md:text-xs  '>Movies</h1> <h1 className='cursor-pointer relative after:absolute after:bg-white after:w-0 after:h-1 after:bottom-0 after:left-0 hover:after:w-full transition-all not-md:text-xs ' >Tv Series</h1></div>
    </nav>
  )
}

export default Navbar