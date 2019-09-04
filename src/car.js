import React from 'react';

import Motor from './motor';
import Battery from './battery';
import Joulemeter from './joulemeter';

class Car extends React.Component{

    render() {
        return (
          <div className="card car">
               <div className="columns">
                    <div className="column">
                         <Battery/>
                         <Motor/>
                         <Joulemeter/>
                    </div>
                    <div className="column">
                         <img src="https://bulma.io/images/placeholders/96x96.png" alt=""/>
                    </div>
               </div>
          </div>
        );
     }
};

     
export default Car;