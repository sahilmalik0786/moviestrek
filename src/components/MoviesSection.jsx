import React, { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import { fetchMovies } from "../services/api";
import Pagination from "./Pagination";
import { useMediaQuery } from 'react-responsive'
import Loader from "./Loader";

function MoviesSection() {
  const [data, setData] = useState([]);
   const [currentpage , setCurrentpage] = useState(1)
   const [loading, setloading] = useState(null)
  //  const [first, setfirst] = useState(second)
  // for fetching and calling tmdb api
  useEffect(() => {
    setloading(true)
    fetchMovies('',"/discover/movie?sort_by=popularity.desc").then((d) => {
      setData(d);
     setloading(prev => false)
    });
  }, []);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  const lastpost = currentpage*10
  const firstpost = lastpost - 10
  const currenposts = data.slice(firstpost , lastpost)
  
  return (
   !loading ?  <div className="w-full mt-10 flex flex-col shrink-0 ">
      <h1 className="md:text-5xl text-3xl md:pl-1  font-bold text-nowrap text-avocado-300">
        Popular Movies
      </h1>
     <div className="  mt-3 rounded-lg flex flex-col items-center justify-center  ">
      <div className="w-full flex md:flex-wrap whitespace-nowrap md:whitespace-normal  md:overflow-visible md:overflow-x-visible overflow-hidden overflow-x-scroll md:gap-18 gap-8  md:justify-center-safe justify-items-start  md:px-10 px-2 py-4 snap-x snap-mandatory items-center ">
        {(isDesktopOrLaptop ? currenposts :data ).map((elem, i) => {
          return <MoviesCard items={elem} key={i} />;
        })}
        
      </div>
      {isDesktopOrLaptop  &&   <div className="w-full p-2 flex items-center justify-center  gap-3 mb-2 mt-4"><Pagination data={data} pages={setCurrentpage} page={currentpage} /></div>}
     </div>
     
    </div>
    : <div className="not-md:flex items-center justify-center h-10/12 w-full bg-slate-900"> <Loader /></div>
  );
}

export default MoviesSection;
