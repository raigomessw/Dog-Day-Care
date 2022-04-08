import './dogInfo.css'
import React from 'react';
import Video from '../../../routes/home/components/assets/back2.mp4'

const DogInfo = ({dog}) => {

    return ([
        <body class="doginfo" >
            <div>
            <div className="overlay-list"></div>
            <div>
                <h1>Dog Info</h1>
                <h2>{dog.name}</h2>
                
            </div>
            </div>
        </body>
            
    ])
}


export default DogInfo;