import React from 'react'
import './GalleryStyles.css'
import Dog from '../../components/assets/dog.jpg'
import Care from '../../components/assets/care.jpg'
import Dog2 from '../../components/assets/dog2.jpg'
import Dog3 from '../../components/assets/dog3.jpg'
import Dog4 from '../../components/assets/dog4.jpg'

const Gallery = () => {
  return (
    <div name="gallery" className="gallery">
      <div className="container">
        <h1>Din lilla väns lycka är vår lycka!</h1>
        <p>Våra gallery</p>
        <div className="img-container">
          <img className="span-3 image-grid-row-2" src={Care} alt="/" />
          <img src={Dog} alt="/" />
          <img src={Dog2} alt="/" />
          <img src={Dog3} alt="/" />
          <img src={Dog4} alt="/" />

        </div>

      </div>
    </div>
  )
}

export default Gallery