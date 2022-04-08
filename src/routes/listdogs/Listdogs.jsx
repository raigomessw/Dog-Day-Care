import React from 'react'
import NavbarList from './componentsList/navBarList/NavbarList'
import HeroListMain from './componentsList/heroList/HeroListMain'


const Listdogs = ({setDog}) => {
  return (
    <div>
      <NavbarList />
       <HeroListMain />
       

    </div>
  )
}

export default Listdogs;