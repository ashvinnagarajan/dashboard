import React from 'react';

class Battery extends React.Component{

    render() {
        return (
          <div className="battery">
               <div className="card-content">
                    <p className="title is-5">Battery</p>
                    <p className="subtitle is-6">{this.props.battery.volt} V | {this.props.battery.amp} A</p>
                    <p className="subtitle is-6">Temp: {this.props.battery.temp} F</p>
                    <p className="subtitle is-6">Remaining: {this.props.battery.remaining}%</p>
               </div>
          </div>
        );
     }
};

     
export default Battery;