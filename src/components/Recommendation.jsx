import { Link } from "react-router-dom"

function Recommendation({items}) {

 
  return (
  <Link to={`/movies/${items.id}`} >
     <div  className='  md:w-110 w-56 h-96 md:h-72 rounded-xl overflow-hidden shrink-0'>
        <div className='overlay w-full h-full p-2 bg-black/80 '>
            <div className='w-full h-4/5 rounded-xl flex flex-col  overflow-hidden bg-red-50/20'>
            <img className="w-full h-full object-cover object-center" src={`https://image.tmdb.org/t/p/original/${items?.poster_path}`} alt="" />
            {/* <div className='w-full h-1/6 bg-red-200/10 absolute -bottom-53 hidden group-hover:bottom-0 transition-all'></div> */}
            </div>
             <div className='p-2 text-white mt-1'>
            <h2 >{items.title}</h2>

        </div>
        </div>
       
        
    </div>
   </Link>
  )
}

export default Recommendation