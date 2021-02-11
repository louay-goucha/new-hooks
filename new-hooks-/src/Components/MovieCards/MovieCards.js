import React from 'react'
import Rate from '../Filter/Rate'
const MovieCards = ({movie}) => {
    return (
        <div className='card'>
            <div className='cardLeft'>
                <img className='image' src= {movie.image} alt='poster'/>
            </div>
            <div className ='cardright'>
                <h1>{movie.name}</h1>
           <div className='cardRdetail'>
               <ul>
                  <li>{movie.description}</li> 
                  <li className='start'><Rate rating={movie.rating} /></li>
               </ul>
           </div>
           <div className='cardRrating'>
               <p>{movie.type}</p>
           </div>
            </div>
        </div>
    );
};
export default MovieCards