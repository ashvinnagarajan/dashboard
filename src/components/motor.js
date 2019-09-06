import React from 'react';

class Motor extends React.Component{

    render() {
        return (
          <div className="motor">
               <div className="card-content">
                    <p className="title is-5">Motor</p>
                    <p className="subtitle is-6">{this.props.motor.bhp} BHP | {this.props.motor.volt} V</p>
                    <p className="subtitle is-6">Temp: {this.props.motor.temp} F</p>
               </div>
          </div>
        );
     }
};

     
export default Motor;