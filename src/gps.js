import React from 'react';

class Weather extends React.Component{

    render() {
        return (
          <div className="weather">
               <div className="card-content">
                    <p className="subtitle is-6">Latitude: 45.1231</p>
                    <p className="subtitle is-6">Longitude: 10.1223</p>
               </div>
          </div>
        );
     }
};

export default Weather;