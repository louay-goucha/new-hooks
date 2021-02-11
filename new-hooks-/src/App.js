
import Search from './Components/Search';
import  React, { useState } from 'react';
import {MovieData} from "./Components/MovieData";
import MovieList from './Components/MovieList/MovieList';
import AddMovies from './Components/AddMovies/AddMovies';
function App() {
  const [movieList, setMoviesList ] =useState (MovieData); 
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);




  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...movieList, newMovie]);
  };
return (
  <div>
    <header>
    <img className='movie' src='https://seeklogo.com/images/M/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png' alt='photo'/>
    </header>
    <main>
      <Search
      setNameSearch={setNameSearch}
      ratingSearch={ratingSearch}
      setRatingSearch={setRatingSearch}/>
    </main>
    
    <MovieList 
    movieList={movieList}
    nameSearch={nameSearch}
    ratingSearch={ratingSearch} />
    <hr/>
    <AddMovies addNewMovie = {addNewMovie} />
  </div>

);
}
  
  

export default App
