import React, { useState, useEffect } from 'react'
import './HeroListStyles.css'
import {Link } from "react-router-dom";
import Video from '../../../home/components/assets/back3.mp4'
import {AiOutlineSearch} from "react-icons/ai";

function HeroListMain() {

  const [dogList, setDogList] = useState([]);
  /*const [searchInputText, setSearchInputText] = useState("");*/

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

        /*const clearNameInputField = () => {
          setSearchInputText("");
        };
  
        const searchInputName = (e) => {
          let dogName = [];
          clearNameInputField();
          apiDataLocal.forEach((input) => {
            if (input.name.startsWith(e.target.value)) {
              setNameInputText(e.target.value);
              dogName.push(input);
            }
          });
          setDogs(dogName);
        };*/
  


        

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
          
           <Link key={dog.chipNumber} to={`/listdogs/${dog.chipNumber}`}>
              <div key={dog.chipNumber} className="card">
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
              {/*<forme className='form-search'>
                 <div>
                 <input className="bg-transparent" type="text" placeholder="Sök Dog Name" onChange={searchInputName} />
                 </div>
                  <div>
                  <button><AiOutlineSearch size={20} className="icon"/></button>
                  </div>
                   </forme>*/}
              <div className="content-list">
              <div className="container-lista">
                  {listContent}
              </div>
          </div>
    </main>
  ))
}

export default HeroListMain;


