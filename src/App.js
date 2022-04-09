import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Listdogs from './routes/listdogs/Listdogs';
import DogInfo from './routes/listdogs/componentsList/heroList/DogInfo';


function App() {

    const [listItems, setListItem] = useState([])




    return ( <
            main >
            <
            Routes >
            <
            Route exact path = "/"
            element = { < Home / > }
            />  <
            Route exact path = "/listdogs"
            element = { < Listdogs setDog = { setListItem }
                />} /
                >
                <
                Route exact path = "/listdogs/:chipNumber"
                element = { < DogInfo dog = { listItems }
                    /> } /
                    >
                    <
                    /Routes >   <
                    /main>
                );
            }

            export default App;