import React from 'react'
import './HeroStyles.css'
import {Link } from "react-router-dom";
import Video from '../../components/assets/backgrund.mp4'


function Hero() {
  return (
    <div className="hero">
        <video autoPlay loop muted id='video'>
            <source src={Video} type='video/mp4' />
        </video>
      
        <div className="overlay"></div>
        <div className="content">
            <h1>Välkommen till Dog Day Care!</h1>
            <h2>Bästa plats till lämna din hund</h2>
              <form className="form">
                  <div>
                  <Link to="/listdogs" >
                     <button>Våra Gänget!</button> 
                   </Link>
                      
                    </div>

               </form>
        </div>
    </div>
  )
}

export default Hero