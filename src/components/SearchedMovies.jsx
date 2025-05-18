import React, { useState } from 'react'
import Pagination from "./Pagination";
import MoviesCard from "./MoviesCard";
import { useContext  } from 'react'
import { searchTerm } from '../context/Context';
import { useMediaQuery } from 'react-responsive'

function SearchedMovies() {

       const [currentpage , setCurrentpage] = useState(1)
       const [input , setinput , data , setData ,loading , setloading , inp] =  useContext(searchTerm)
      
     const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
     })
    
  const lastpost = currentpage*10
  const firstpost = lastpost - 10
  const currenposts = data?.slice(firstpost , lastpost)


  return (
    <div className="w-full mt-10 flex flex-col shrink-0 ">
      <h1 className="md:text-5xl text-3xl md:pl-10 text-wrap font-bold md:text-nowrap text-avocado-300">
     {data.length>0 && `Searched Movies for ${inp}`} 
      </h1>

     <div className=" bg- mt-3 rounded-lg flex flex-col items-center justify-center  ">
      <div className="w-full flex md:flex-wrap whitespace-nowrap md:whitespace-normal md:overflow-visible md:overflow-x-visible overflow-hidden overflow-x-scroll md:gap-12 gap-8  md:justify-center-safe justify-items-start  md:px-20 px-2 py-4 snap-x snap-mandatory items-center ">
      {data.length !== 0  &&  (isDesktopOrLaptop?currenposts:data).map((elem ,i )=>{
        return <MoviesCard items={elem} key={i}  />
       })}
      {data.length == 0 && loading!=true && <h2 className='text-white  text-xl flex gap-5 items-center'>no movies found for :<span className='text-2xl text-avocado-300'>{inp}</span></h2>}
        

      </div>
      {isDesktopOrLaptop  &&   <div className="w-full p-2 flex items-center justify-center  gap-3 mb-2 mt-4"><Pagination data={data} pages={setCurrentpage} page={currentpage} /></div>}
     </div>
     
    </div>
  );
}

export default SearchedMovies