import React from 'react'
import {useParams} from "react-router-dom";

export const DogInfo = () => {
  let apiDataLocal = JSON.parse(localStorage.getItem("savedApiData"));
  let {chipNumber} = useParams();

  let myDog = {}
  for (const dog of apiDataLocal) {
    if (dog.chipNumber === chipNumber){
      myDog = dog
    } 
  }

  return ([
    <div class="card">
       <header class="infoheader"> 
            <img src={myDog.img} alt="dog"></img>
            <h2>{myDog.name}</h2>
        </header>
    </div>
    
  ])
}
export default DogInfo;
