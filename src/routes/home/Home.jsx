import React from 'react'
import Navbar from '././components/navbar/Navbar';
import Hero from '././components/hero/Hero';
import Gallery from '././components/gallery/Gallery';
import Footer from '././components/footer/Footer';
import {Link} from 'react-scroll/'

const Home = () => {
  return (
    <Link to='/'>
    <div>
     <Navbar / >
     <Hero / >
     <Gallery />
     <Footer />
    </div>
    </Link>
  )
}

export default Home;