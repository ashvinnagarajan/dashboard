import React from 'react';

import Line from './notused/line';
import Weather from './weather';
import Lap from './lap';
import GPS from './gps';

class Track extends React.Component{

    render() {
        return (
          <div className="card track">
               <div className="columns">
                    <div className="column">
                         <div className="card-content">
                         <p className="title is-4">Sonoma Raceway</p>
                         <p className="subtitle is-6">Trial Number 1</p>
                         </div>

                         <Lap/>
                    </div>
                    <div className="column">
                         <Weather/>
                         <GPS/>
                    </div>
               </div>
               
               <div className="card-image">
                    <Line/>
               </div>
          </div>
        );
     }
};

     
export default Track;