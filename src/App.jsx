import Home from "./components/Home";
import MoviesSection from "./components/MoviesSection";
import TrendingMovies from "./components/TrendingMovies";
import Navbar from "./components/Navbar";
import { useState , useContext } from "react";
import SearchedMovies from "./components/SearchedMovies";
import { searchTerm } from "./context/Context";
import Loader from "./components/Loader";
import Routing from "./router/Routing";
import { Fragment } from "react";



function App() {
        
  
  return (
    
    
    <Routing />
  
  );
}

export default App;
