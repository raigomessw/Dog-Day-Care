import React from 'react'

export const DogInfo = ({chipNumber}) => {
  let apiDataLocal = JSON.parse(localStorage.getItem("savedApiData"));

  console.log(apiDataLocal)

  const myDog = {}
  for (const dog of apiDataLocal) {
    if (dog.chipNumber === chipNumber){
      myDog = dog
    }
  }

  console.log(myDog)
  console.log("local Saved apiData: ", apiDataLocal);

  return ([
    <div>
    <h2>hiiiis</h2>
    <h1>{dog.name}</h1>
    <img src={dog.img} alt="dog"></img>
    </div>
  ])
}
export default DogInfo;
