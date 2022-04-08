import React, {useState} from 'react'
import { DiResponsive } from "react-icons/di";
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import {FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {Element} from 'react-scroll/'

import './NavbarListStyles.css' 


function Navbar() {

    const[nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)



  return (
    <div name="home" className={nav ? "navbar-list navbar-bg" : "navbar-list"}>
        <div className={nav ? "logo dark" : "logo"}>
            <Link to="/" smooth="true" duration={500}><h2>DOG DAY CARE.</h2></Link>
        </div>

        <ul className="nav-menu">
            <Link to="/" smooth="true" duration={500}><li>Home</li></Link>
            <Element to="dogs" smooth="true" duration={500}><li>Dogs</li></Element>
            <Element to="info" smooth="true" duration={500}><li>Info</li></Element>
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
            <Element to="dogs" smooth="true" duration={500}><li>Dogs</li></Element>
            <Link to="info" smooth="true" duration={500}><li>Info</li></Link>
          </ul>

          <div className="mobile-menu-botton">
              <div className="menu-icons">
              <button className="button">Våra Gänget!</button> 
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