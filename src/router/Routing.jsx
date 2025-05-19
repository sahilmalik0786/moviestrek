import { Route, Routes } from "react-router-dom"
import MoviesDetails from "../components/MoviesDetails"
import App from "../App"
import Home from "../components/Home"


function Routing() {
  
  
  return (
    <Routes>
      
        <Route path={'/'} element={<Home />} />
        <Route path={`/movies/:id`} element={<MoviesDetails />} />
      
      
        
    </Routes>
  )
}

export default Routing