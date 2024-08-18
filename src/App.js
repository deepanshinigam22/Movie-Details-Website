
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MovieList from './Components/movieList/MovieList';
import MovieDetail from './Components/MovieDetail/MovieDetail';
import Search from './Components/Search/Search';


function App() {
  return (
   <div className='App'>
       <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<MovieDetail/>}></Route>
          <Route path="movies/:type" element={<MovieList/>}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
          <Route path="movies/search" Component={Search}></Route>
        </Routes>
       </Router>
   </div>
  );
}

export default App;
