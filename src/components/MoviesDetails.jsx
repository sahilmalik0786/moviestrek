import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchcredits, fetchimages } from "../services/api";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Cast from "./cast";


function MoviesDetails() {
  const { id } = useParams("id");
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState([]);
  const [color , setcolor] = useState('')
  const [Castdata, setCastdata] = useState([])
  
  const { backdrop_path, poster_path, title, overview, release_date, genres ,tagline ,runtime} =
    data;

  const colors = ["bg-slate-800" , "bg-accent1" , "bg-avocado-300" , "bg-red-400", "bg-purple-500" ,"bg-green-700"]

  const randomColor = (color)=>{
      
        let c = Math.floor(Math.random()*color.length) 
       
        return color[c]
  }
 

  
 
  useEffect(() => {
    setLoading(true);
    fetchimages((id)).then((d) => {
     
      setData(d);
     
      setcolor(randomColor(colors))
      fetchcredits((id)).then((d)=>{
        setCastdata(d.cast)
        // console.log(d.cast)
        setLoading(prev => false)
      })
    })
    
    
    
  }, []);

// console.log(Castdata.map((elem)=>{
//   return "hellp"
// }))

  return !loading ? (
        

    <div className={`w-full ${color} flex flex-col  md:px-10 py-2 px-4 md:pt-10  scroll-smooth font-mono`}>
     <Navbar  />

      <div >
        <div
           style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${backdrop_path}')`}}
          className={` w-full md:h-11/12 overflow-hidden  md:bg-cover md:bg-center bg-center bg-cover bg-no-repeat  rounded-lg  `}
        >
          <div className=" overlay  w-full  bg-black/60 md:p-5  py-3 overflow-hidden backdrop-blur-5px flex md:flex-row flex-col items-center gap-3 ">
            <div className=" md:h-10/12 md:w-96 h-64 w-44 group img overflow-hidden not-md:mt-5 rounded-lg flex items-center justify-center">
              {" "}
              <img
                className="md:h-full h-full w-full object-cover object-bottom not-md:flex flex-wrap text-white text-center text-md  "
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                role="presentation"
              />
            </div>

            <div className="hover:bg-black/10 hover:backdrop-blur-xs rounded-xl w-10/12 h-full md:h-[70vh] md:px-5 md:py-4  text-accent1 transition-all ">
              <div className="headings mt-4">
                {" "}
                <h1 className="text-5xl capitalize font-semibold tracking-normal text-avocado-300">
                  {title}{" "}
                  <span className="md:text-lg text-xs  text-accent1">
                    (2025)
                  </span>
                </h1>
                <div className="flex md:gap-4 gap-1 mt-3 flex-wrap">
                  <h2 className="text-nowrap" >{release_date}</h2>{" "}
                  <ul className="ml-3 flex gap-2">
                    {" "}
                    {genres?.map((elem ,i) => {
                      return (
                          <li key={i} className="list-disc tracking-tighter mr-4 hover:text-accent1/80 select-none">{elem.name},</li>
                        
                      );
                    })}
                  </ul>
                  <h2>{runtime}m</h2>
                </div>
              </div>
              <div className="ratings flex justify-between items-center mt-6 md:pr-10">
                <div className="flex gap-2 items-center">
                  <div className="h-20 w-20 bg-accent1 border-8 border-avocado-300 rounded-full flex items-center text-white  md:text-xl font-bold justify-center  ">
                    44%
                  </div>{" "}
                  <h3 className=" md:text-lg text-sm flex ">
                    user's <br />
                    score
                  </h3>{" "}
                </div>
                <div className="">
                  <button className="md:px-4 md:py-2 px-2 py-1 md:text-lg text-xs bg-red-50 hover:pr-10 transition-all rounded-bl-xl rounded-tl-xl cursor-pointer">
                    Watch trailer
                  </button>
                </div>
              </div>
              <div className="overview  md:p-3 mt-10">
                <div className="flex gap-4 flex-col shrink  ">
                  <h3>{tagline}</h3>
                  <h1 className="text-white  ">
                    <span className="text-slate-400 ">OVERVIEW</span> <br />
                    {overview}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
         style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${backdrop_path}')`}}
          className=" w-full min-h-screen  mt-5 rounded-lg bg-no-repeat  bg-bottom md:bg-cover bg-fit  overflow-hidden">
          <div className=" overlay h-screen w-full bg-black/70 p-3 overflow-hidden ">
           <div className="cast w-full  md:p-3 py-1 flex items-center justify-items-start scroll-smooth gap-3 shrink-0 overflow-hidden whitespace-nowrap overflow-x-scroll snap-x snap-mandatory">

            {!loading ? Castdata.slice(0,21).map((elem , i )=>{
              return <Cast key={i} details={elem}/>
            }):'hellp'}
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
