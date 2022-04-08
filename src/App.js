import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import DogInformation from './routes/dogsInfo/DogInformation';
import Listdogs from './routes/listdogs/Listdogs';


function App() {
    const [listItem, setListItem] = useState()



    return ( <
        main >
        <
        Routes >
        <
        Route exact path = "/"
        element = { < Home / > }
        /> <
        Route exact path = "/listdogs"
        element = { < Listdogs setDog = { setListItem }
            />
        }
        /> <
        Route exact path = "/listdogs/dogInformation"
        element = { < DogInformation dog = { listItem }
            />
        }
        />

        <
        /Routes >  <
        /main>
    );
}

export default App;