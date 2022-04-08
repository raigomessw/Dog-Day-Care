import React, { useState, useEffect } from 'react'
import './HeroListStyles.css'
import {Link} from 'react-router-dom'
import Video from '../../../home/components/assets/back3.mp4'





function HeroListMain({setDog}) {

  const [dogList, setDogList] = useState([]);

    useEffect(() => {
        fetch('https://raigomessw.github.io/dogs.json/mydata.json')
        .then(response => response.json())
        .then(json => setDogList(json));

        console.log(dogList);
    
    }, []); 



    let listContent = dogList.map((dog)=> {
      var sex = ""
      if(dog.sex === "Female") {
          sex = "\u2640"
      } else {
          sex = "\u2642"
      }

      let present = "Not present";
      let presentIcon = "\u2715"
      if(dog.present) {
          present = "Present"
          presentIcon = "\u2713"
      }


      return ([
          
          <Link className="link" to="/listdogs/dogInformation">
              <div key={dog.chipnumber} className="card" onClick={() => setDog(dog)}>
                  <img  src={dog.img} alt="dog"></img>
              
                      <h3 className="name">{dog.name} {sex}</h3>
                      <p className="breed">{dog.breed}</p>
                  
                  <button className={dog.present ? "present" : "not-present"}>{presentIcon}</button>
                  <div className="present-text">{present}</div>
              </div>
          </Link>
          
      ]);   
  })

  return ([
    <main key="list" className="hero-list">
      <video autoPlay loop muted id='video'>
            <source src={Video} type='video/mp4' />
        </video>
        <div className="overlay-list"></div>
             <div className="title2">
                <h2>Våra Gänget!</h2>
              </div>
              <div className="content-list">
               <div className="container-lista">
                  {listContent}
                </div>
              </div>
    </main>
])
}

export default HeroListMain;