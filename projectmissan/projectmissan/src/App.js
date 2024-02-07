
import { createContext, useEffect, useState } from 'react';
import Button from './Component/Button';
import Movie from './Component/Movie';
import { AnimatePresence } from "framer-motion";
import './index.css';

//Create Context
export const MovieContext = createContext();


function App() {

  const [popularMovies, setPopularMovies] = useState([]);
  const [filteredMovie, setFilteredMovie] = useState([]);

const fetchPopularMovie = async () => {
  const response = await fetch ('https://api.themoviedb.org/3/movie/popular?api_key=424d93da8d021e5a8adbf7d6cd6f7095&language=en-US&page=1')

  const movies = await response.json();
  setPopularMovies(movies.results);
  setFilteredMovie(movies.results);
}

useEffect (() => {
  fetchPopularMovie();
}, []);


const value ={
  popularMovies,
  filteredMovie,
  setFilteredMovie

}



  return (
    <MovieContext.Provider value = {value}>
    <div className="app">
      <Button />
      <div className="image-container">
        <AnimatePresence>
        <Movie/>
        </AnimatePresence>
        
      </div>
    </div>
    </MovieContext.Provider>
   
  );
}

export default App;
