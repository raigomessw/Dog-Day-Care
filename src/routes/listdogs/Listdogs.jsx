import React from 'react'
import NavbarList from './componentsList/navBarList/NavbarList'
import FooterList from './componentsList/footerList/FooterList'
import HeroList from './componentsList/heroList/HeroListMain'


const Listdogs = () => {
  return (
    <div>
      <NavbarList />
       <HeroList />
       {/*<FooterList />*/}

    </div>
  )
}

export default Listdogs;