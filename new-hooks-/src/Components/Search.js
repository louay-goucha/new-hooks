import React from 'react'
import Rate from './Filter/Rate'

const Search = ({ setNameSearch, ratingSearch, setRatingSearch }) => {
    return (
        <div className='flex'>
        <section className='box'>
            <input type='text' placeholder='search for a movie...' className='searchbox'
            onChange={(e) => setNameSearch(e.target.value)} />
        </section>
        <div className="rating-search">
          <Rate rating={ratingSearch} setRatingSearch={setRatingSearch} />
        </div>
      </div>

            
    )
}

export default Search
