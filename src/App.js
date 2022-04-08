import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Listdogs from './routes/listdogs/Listdogs';


function App() {
    return ( <
        main >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "listdogs"
        element = { < Listdogs / > }
        />  <
        /Routes >  <
        /main>
    );
}

export default App;