import React, { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import { fetchimages } from "../services/api";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Cast from "./Cast";
import Routing from "../router/Routing"

import Recommendation from "./Recommendation";


function MoviesDetails() {
  const { id } = useParams("id");
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState([]);
  const [color, setcolor] = useState('')
 


  const { backdrop_path, poster_path, title, overview, release_date, genres, tagline, runtime, credits, videos, vote_average, recommendations } =
    data;


  const traile = videos?.results.find(video => video.site === "YouTube" && video.type === "Trailer");




  const colors = ["bg-slate-800", "bg-accent1", "bg-avocado-300", "bg-red-400", "bg-purple-500", "bg-green-700"]

  const randomColor = (color) => {

    let c = Math.floor(Math.random() * color.length)

    return color[c]
  }





  useEffect(() => {
    setLoading(true);
    fetchimages((id)).then((d) => {
      setData(d);
      setcolor(randomColor(colors))
      setLoading(prev => false)
      
    })
    


  }, [id]);


  let youtubeUrl
  if (traile && traile.key) {
    youtubeUrl = `https://www.youtube.com/watch?v=${traile.key}`
  }



  return !loading ? (


    <div className={`w-full ${color} flex flex-col  md:px-10 py-2 px-2 md:pt-10  scroll-smooth font-mono`}>
      <Navbar />

      <div >
        <div
          style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${backdrop_path}')` }}
          className={` w-full md:h-11/12 overflow-hidden  md:bg-cover md:bg-center bg-center bg-cover bg-no-repeat  rounded-lg  `}
        >
          <div className=" overlay  w-full  bg-black/60 md:p-5 px-4 py-3 overflow-hidden backdrop-blur-5px flex md:flex-row flex-col items-center gap-3 ">
            <div className=" md:h-10/12 md:w-96 h-64 w-44 group img overflow-hidden not-md:mt-5 rounded-lg flex items-center justify-center">
              {" "}
              <img
                className="md:h-full h-full w-full object-cover object-bottom not-md:flex flex-wrap text-white text-center text-md  "
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                role="presentation"
              />
            </div>

            <div className="hover:bg-black/10 hover:backdrop-blur-xs rounded-xl w-full md:w-10/12  h-full md:h-[70vh] md:px-5 md:py-4  text-accent1 transition-all ">
              <div className="headings mt-4 not-md:bg-red-100/10 p-1 rounded-xl">
                {" "}
                <h1 className="md:text-5xl text-3xl capitalize font-semibold tracking-normal text-avocado-300 ">
                  {title}{" "}
                  <span className="md:text-lg text-xs  text-accent1">
                    (<span>{release_date?.slice(0, 4)}</span>)
                  </span>
                </h1>
                <div className="flex md:gap-4 gap-3 mt-3 flex-wrap">
                  <h2 className="text-nowrap" >{release_date}</h2>{" "}
                  <ul className=" flex gap-1 flex-wrap ">
                    {" "}
                    {genres?.map((elem, i) => {
                      return (
                        <li key={i} className=" tracking-tighter  hover:text-accent1/80 select-none ">{elem.name},</li>

                      );
                    })}
                  </ul>
                  <h2>{runtime}m</h2>
                </div>
              </div>
              <div className="ratings flex justify-between items-center mt-6 md:pr-10 ">
                <div className="flex gap-2 items-center">
                  <div className="md:h-20 md:w-20 h-10 w-10 bg-accent1 md:border-8 border-avocado-300 rounded-full flex items-center text-white  md:text-xl font-bold justify-center text-sm ">
                    {Math.floor(vote_average * 10) + "%"}
                  </div>{" "}
                  <h3 className=" md:text-lg text-xs flex ">
                    user's <br />
                    score
                  </h3>{" "}
                </div>
                <div className="">
             
                  <p className="md:px-4 md:py-2 px-2 py-2 md:text-lg text-xs font-black bg-red-50 hover:pr-10 transition-all rounded-bl-xl rounded-tl-xl cursor-pointer"> <a href={youtubeUrl} target="_blank" rel="noopener noreferrer"> Watch trailer</a> </p>
                </div>
              </div>
              <div className="overview  md:p-3 mt-10  mb-3">
                <div className="flex gap-2 flex-col shrink bg-red-50/10 p-1 rounded-xl ">
                  <h3>{tagline != "" ? tagline : 'not tagline for this'}</h3>
                  <h1 className="text-white not-md:text-sm ">
                    <span className="text-slate-400 ">OVERVIEW</span> <br />
                    {overview}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${backdrop_path}')` }}
          className=" w-full min-h-screen  mt-5 rounded-lg bg-no-repeat  bg-bottom md:bg-cover bg-fit overflow-hidden">
          <div className=" overlay min-h-full w-full bg-black/70 p-3 overflow-hidden ">
            <div className="cast w-full  md:p-3 py-1 flex items-center justify-items-start scroll-smooth gap-3 shrink-0 overflow-hidden whitespace-nowrap overflow-x-scroll snap-x snap-mandatory">

              {!loading && credits?.cast.length!==0 ? credits?.cast.slice(0, 21).map((elem, i) => {
                return <Cast key={i} details={elem} />
              }) : <h1>No cast data for this movie yet. </h1>}
            </div>

            <div className="flex flex-col  mt-5">
              <h1 className="text-avocado-300 md:text-xl text-lg pl-2">
                Recommendation
              </h1>
              <div className={`w-full flex  items-center md:p-3 py-1 justify-items-start shrink-0 gap-3  ${recommendations?.results.length !==0 ? "overflow-y-hidden whitespace-nowrap overflow-x-sroll" : ""} mb-5`}>
             { !loading && recommendations?.results.length!==0 ? recommendations?.results.slice(0,10).map((elem ,i)=>{
              return <Recommendation items={elem} key={i} />
             }) : <h1 className="text-white">NO recommendations for this movie yet because lack of data </h1>}         
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  ) : (
    <div className="h-screen bg-slate-700 flex items-center"><Loader /></div>
  );
}

export default MoviesDetails;
