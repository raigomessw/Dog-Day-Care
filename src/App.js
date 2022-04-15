import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Listdogs from './routes/listdogs/Listdogs';
import DogInfo from './routes/listdogs/componentsList/heroList/DogInfo';


function App() {

    return ( <
        main >
        <
        Routes >

        <
        Route exact path = "/"
        element = { < Home / > }
        />   <
        Route exact path = "/listdogs"
        element = { < Listdogs / > }
        />  <
        Route exact path = "/listdogs/:chipNumber"
        element = { < DogInfo / > }
        />      < /
        Routes > <
        /main>
    );
}

export default App;