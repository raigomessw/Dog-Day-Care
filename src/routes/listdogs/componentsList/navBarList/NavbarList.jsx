import React, {useState} from 'react'
import { DiResponsive } from "react-icons/di";
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import {FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import {Link} from 'react-router-dom'


import './NavbarListStyles.css' 


function Navbar() {

    const[nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)



  return (
    <div name="home" className={nav ? "navbar-list navbar-bg" : "navbar-list"}>
        <div className={nav ? "link dark" : "logo"}>
          <Link to="/" className="dark" smooth="true" duration={500}><h2>DOG DAY CARE.</h2></Link>
        </div>

        <ul className="nav-menu">
            <Link to="/" className="link-home" smooth="true" duration={500}><a><li>Home</li></a></Link>
            <Link to="/listdogs" className="link-dogs"  smooth="true" duration={500}><a><li>Dogs</li></a></Link>
        </ul>

        <div className="nav-icons">
            <DiResponsive className="icon" />
        </div>

        <div className="hamburger" onClick={handleNav}>
            {!nav ? (<HiOutlineMenuAlt4 className="icon" />) : (<AiOutlineClose style={{color: "#000"}} className="icon" />)}

            
        </div>

        <div className={nav ? "mobile-menu active" : "mobile-menu"}>
          <ul className="mobile-nav">
           <Link to="/" smooth="true" duration={500}><li>Home</li></Link>
            <Link to="/listdogs" smooth="true" duration={500}><li>Dogs</li></Link>
          </ul>

          <div className="mobile-menu-botton">
              <div className="menu-icons">
              <Link to="/listdogs" >
                <button>Våra Gänget!</button> 
               </Link>
              </div>

              <div className="social-icons">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaYoutube className="icon" />
              </div>
          </div>

        </div>
        
    </div>
  )
}

export default Navbar