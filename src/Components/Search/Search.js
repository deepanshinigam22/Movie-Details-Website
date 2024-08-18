import React, {useState} from 'react'
import './Search.css'
import Card from '../Card/Card';
import MovieList from '../movieList/MovieList';
import Trending from '../Trending/Trending';

const Search = () => {
     
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${query}&language=en-US`)
                .then(res => res.json())
                .then(data => {
                    if (data.results) {
                        setResults(data.results);
                    }
                })
                .catch(error => console.error('Error fetching search results:', error));
        }
    }
  return (
    <div  id='search' className="movie-search">
        <h1> Search Your Favourite Movie!!</h1>
    <form onSubmit={handleSearch}>
        <div className='input-section'>
        <input 
            type="text" 
            placeholder="Search for a movie..." 
            value={query} 
            onChange={handleInputChange} 
        />
        <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        
    </form>
          <div className="search-results">
                {query==="" ? (
                    <Trending/>
                ):(
                    results.map(movie => (
                        <Card movie={movie}/>
                    ))
                )
                    
                }


            </div>
    </div>
  )
}

export default Search