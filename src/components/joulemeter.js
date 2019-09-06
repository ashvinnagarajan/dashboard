import React from 'react';

class Joulemeter extends React.Component{

    render() {
        return (
          <div className="joulemeter">
               <div className="card-content">
                    <p className="title is-5">Joulemeter</p>
                    <p className="subtitle is-6">{this.props.joulemeter.volt} V | {this.props.joulemeter.amp} A</p>
                    <p className="subtitle is-6">Instant Efficiency: {this.props.joulemeter.instant} mi/kWh</p>
                    <p className="subtitle is-6">Avg Efficiency: {this.props.joulemeter.avg} mi/kWh</p>
                    <p className="subtitle is-6">Peak Efficiency: {this.props.joulemeter.peak} mi/kWh</p>
               </div>
          </div>
        );
     }
};

     
export default Joulemeter;