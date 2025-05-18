import React from 'react'

function Navbar({c}) {
  
 const colors = ["-slate-800" , "-accent1" , "-avocado-300" , "-red-400", "-purple-500" ,"-green-700"]

  return (
    
    <nav className={`w-full bg-linear-to-r  from-slate-500/20 md:via-slate-900/40 via-slate-700/20 from-0% md:via-10%  to-gray-800/20   py-2 not-md:h-16 flex items-center  border-white  px-4 mb-6 rounded-lg `}>
        <div className=' w-20 '><img className='object-cover w-full' src="/logo.png" alt="" /></div>
        <div></div>
    </nav>
  )
}

export default Navbar