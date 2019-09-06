import React from 'react';

import Motor from './motor';
import Battery from './battery';
import Joulemeter from './joulemeter';
import Speed from './speed';

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
                         <Speed/>
                    </div>
               </div>
          </div>
        );
     }
};

     
export default Car;