import React, {useState} from 'react'
import { DiResponsive } from "react-icons/di";
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import {FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import {Link} from 'react-scroll/'
import {Link as Element} from "react-router-dom";


import './NavbarStyle.css' 


function Navbar() {

    const[nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const [color, setColor] = useState(false)
    const changeColor =() => {
      if(window.scrollY >= 100) {
        setColor(true)
      }else{
        setColor(false)
      }
    }

    window.addEventListener(`scroll`, changeColor)



  return (
    <div className={color ? "navbar navbar-bg" : "navbar"}>
      <div name="home" className={nav  ? "navbar navbar-bg" : "navbar"}>
        <div className={nav ? "logo dark" : "logo"}>
            <h2 className="">DOG DAY CARE.</h2>
        </div>
        <ul className="nav-menu">
            <Link to="home" className="link-homee" smooth="true" duration={500}><li>Home</li></Link>
            <Link to="gallery" className="link-gallery" smooth="true" duration={500}><li>Gallery</li></Link>
            <Link to="info" className="link-info" smooth="true" duration={500}><li>Info</li></Link>
        </ul>

        <div className="nav-icons">
            <DiResponsive className="icon" />
        </div>

        <div className="hamburger" onClick={handleNav}>
            {!nav ? (<HiOutlineMenuAlt4 className="icon" />) : (<AiOutlineClose style={{color: "#000"}} className="icon" />)}
        </div>
        <div className={nav ? "mobile-menu active" : "mobile-menu"}>
          <ul className="mobile-nav">
           <Link to="home" smooth="true" duration={500}><li>Home</li></Link>
            <Link to="gallery" smooth="true" duration={500}><li>Gallery</li></Link>
            <Link to="info" smooth="true" duration={500}><li>Info</li></Link>
          </ul>
          <div className="mobile-menu-botton">
              <div className="menu-icons">
              <Element to="/listdogs" >
                  <button>Våra Gänget!</button> 
                </Element>
              </div>
              <div className="social-icons">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaYoutube className="icon" />
              </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar