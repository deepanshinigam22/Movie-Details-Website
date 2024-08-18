import React,{useState, useEffect} from 'react'
import './Trending.css'
import Card from '../Card/Card'

const Trending = () => {

    const [movieList, setMovieList] = useState([])
    

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        getData()
    })
    
    const getData = () =>{
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=4e44d9029b1270a757cddc766a1bcb63`)
        .then(res =>res.json())
        .then(data => setMovieList(data.results))
    }
  return (
    <div className='movie__list'>
        <h2 className='list__title'>TRENDING</h2>
        <div className='list__cards'>
            
            {
                movieList.map(movie =>(
                    <Card movie={movie}/>
                ))
            }
        </div>
    </div>
  )

}

export default Trending