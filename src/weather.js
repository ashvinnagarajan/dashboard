import React from 'react';

class Weather extends React.Component{

    render() {
        return (
          <div className="weather">
               <div className="card-content">
                    <p className="subtitle is-6">Partly Cloudy</p>
                    <p className="subtitle is-6">78 F</p>
                    <p className="subtitle is-6">Humidity: 45%</p>
                    <p className="subtitle is-6">Some other numbers</p>
               </div>
          </div>
        );
     }
};

export default Weather;