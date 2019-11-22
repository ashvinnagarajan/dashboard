import React from 'react';

import Line from '../notused/line';
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
                              <p className="title is-4">{this.props.track["name"]}</p>
                              <p className="title is-6">Trial Number {this.props.track["trial"]} </p>
                         </div>
                         <GPS gps={this.props.gps}/>
                    </div>
                    <div className="column">
                         <Weather weather={this.props.weather}/>
                    </div>
               </div>
               <Lap lap={this.props.lap}/>
               <div className="card-image">
                    <Line/>
               </div>
          </div>
        );
     }
};

     
export default Track;