import React from 'react';
import MovieCards from "../MovieCards/MovieCards" ;
const MovieList = ({movieList, nameSearch, ratingSearch}) => {
    return (
        <div className='moviesList'>
            {movieList
        .filter(
          (el) =>
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
            el.rating >= ratingSearch
        )
            .map ((movie,i) => ( <MovieCards key ={i} movie={movie}/>))}
        </div>
    )
}
export default MovieList;