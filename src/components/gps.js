import React from 'react';

class Weather extends React.Component{

    render() {
        return (
          <div className="GPS">
               <div className="card-content GPS">
                    <p className="subtitle is-6">Latitude: {this.props.gps.lat}</p>
                    <p className="subtitle is-6">Longitude: {this.props.gps.long}</p>
               </div>
          </div>
        );
     }
};

export default Weather;