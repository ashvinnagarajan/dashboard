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
                         <Battery battery={this.props.battery} />
                         <Motor motor={this.props.motor}/>
                         <Joulemeter joulemeter={this.props.joulemeter} />
                    </div>
                    <div className="column">
                         <Speed speed={this.props.speed} />
                    </div>
               </div>
          </div>
        );
     }
};

     
export default Car;