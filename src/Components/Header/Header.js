import React,{useState} from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logom.png'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {

      setIsOpen(!isOpen);
    };
  

  return (
    <div className='header'>
        <div className='headerLeft'>
        
            
            <Link to="/"><img className='header__icon' src={logo}></img></Link>
         
            <ul className={isOpen ? 'active' : ''}>
              
              <Link to="/"  style={{textDecoration: "none"}}><span>Home</span></Link>
              <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
              <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
              <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
              <Link to="/movies/search" style={{textDecoration: "none"}}><span>Search</span></Link>
              
            </ul>
            <i class="fa-solid fa-bars menu-icon"  onClick={toggleMenu}></i>
        </div>
        
    </div>
  )
}

export default Header