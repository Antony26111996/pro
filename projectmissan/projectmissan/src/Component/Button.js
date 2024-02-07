import React, { useContext, useState } from 'react'
import { MovieContext } from '../App';
import { genres } from './Array'

const Button = () => {

    const [ tabActive, setTabActive] = useState(0);
    const { popularMovies, setFilteredMovie } = useContext(MovieContext);

    const handleClickFilter = (id) => {
        setTabActive(id);
        const filteredMovie = popularMovies.filter(movie => movie.genre_ids.includes(id));
        if(id === 0){
            setFilteredMovie(popularMovies);
        }else{
            setFilteredMovie(filteredMovie);
        }
    }


  return (
    <div className='button-wrap'>
        {genres.map(item =>(
            <button
             key ={item.id}
             className={tabActive === item.id ? "active" : undefined}
             onClick={() => handleClickFilter(item.id)}
             >{item.name}</button>
        ))}
    </div>
  )
}

export default Button