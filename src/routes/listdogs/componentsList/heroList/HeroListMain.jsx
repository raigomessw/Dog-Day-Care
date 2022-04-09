import React, { useState, useEffect } from 'react'
import './HeroListStyles.css'
import {Link } from "react-router-dom";
import Video from '../../../home/components/assets/back3.mp4'






function HeroListMain({setDog}) {

  const [dogList, setDogList] = useState([]);

  useEffect(() => {
    getData();
  },[]);

    const getData = async () => {
        console.log("apiData: ", dogList);
          
          if(localStorage.getItem("savedApiData") === null) {
            // localStorage.setItem("savedApiData", JSON.stringify([]));
    
            const response = await fetch(
              `https://raigomessw.github.io/dogs.json/mydata.json`
            );
            const dogList = await response.json();
            setDogList(dogList);
            localStorage.setItem("savedApiData", JSON.stringify(dogList));
            console.log("saved apidata: ", dogList);
    
          } else {
            let apiDataLocal = JSON.parse(localStorage.getItem("savedApiData"));
            setDogList(apiDataLocal);
            console.log("local Saved apiData: ", apiDataLocal);
          }
        };

        

    let listContent = dogList.map((dog)=> {
      var sex = ""
      if(dog.sex === "female") {
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
     
     return ((
          
           <Link key={dog.chipNumber} to={`/listdogs/${dog.chipNumber}>`}>
              <div key={dog.chipNumber} className="card" onClick={() => setDog(dog)}>
                  <img onClick  src={dog.img} alt="dog"></img>
                      <h3 className="name">{dog.name} {sex}</h3>
                      <p className="breed">{dog.breed}</p>
                      <p className="description">{dog.chipNumber}</p>
                  <button className={dog.present ? "Present" : "Not-present"}>{presentIcon}</button>
                  <div className="present-text">{present}</div>
                </div>
           </Link>
          
      ));   
  })

  return ((
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
  ))
}

export default HeroListMain;