import React from 'react';

class Weather extends React.Component{

    render() {
        return (
          <div className="GPS">
               <div className="card-content GPS">
                    <p className="subtitle is-6">Latitude: 45.1231</p>
                    <p className="subtitle is-6">Longitude: 10.1223</p>
               </div>
          </div>
        );
     }
};

export default Weather;