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
                         <Joulemeter joulemeter={this.props.joulemeter} />
                         <Battery battery={this.props.battery} />
                         
                    </div>
                    <div className="column">
                         <Speed speed={this.props.speed} />
                         <Motor motor={this.props.motor}/>
                    </div>
               </div>
          </div>
        );
     }
};

     
export default Car;