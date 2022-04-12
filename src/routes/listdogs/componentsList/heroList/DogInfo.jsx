import React from 'react'
import {useParams} from "react-router-dom";
import './DogInfoStyle.css'
import Navbar from '../navBarList/NavbarList';
import Video from '../../../home/components/assets/back2.mp4'



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

    <div className="hero-info-dog">
         <header className="headerr"> 
            <Navbar/>
            <video autoPlay loop muted id='video'>
              <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay-info"></div>
            <div className="title2-info">
                <h2>DOG INFO</h2>
              </div>
        </header>
        <div className="content-listt">
            <main class="hero-info">
                <div class="card-dog-info">
                  <img src={myDog.img} alt="dog"></img>
                  <div className="left">
                    <ul>
                      <li><h2>{myDog.name}</h2></li>
                      <li><h4>Breed: {myDog.breed}</h4></li>
                      <li><h4>Sex: {myDog.sex}</h4></li>
                      <li><h4>Age: {myDog.age}</h4></li>
                      <h4>Chipnumber: </h4>
                      <p> {myDog.chipNumber}</p>
                    </ul>
                  </div>
                  <div class="right">
                    <ul>
                    <h2 className='dono'>Owner</h2>
                    <li><h4>Name:</h4></li>
                    <p>{myDog.owner.name}{myDog.owner.lastName}</p>
                    <li><h4>Phonenumber:</h4></li>
                    <p>{myDog.owner.phoneNumber}</p>
                    </ul>
                </div>
                </div>
            </main>
          </div>
    </div>
    
  ])
}
export default DogInfo;
