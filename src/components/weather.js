import React from 'react';

class Weather extends React.Component{

    render() {
        return (
          <div className="weather">
               <div className="card-content">
                    <p className="subtitle is-6">{this.props.weather["weather"]}</p>
                    <p className="subtitle is-6">{this.props.weather["temp"]} F</p>
                    <p className="subtitle is-6">Humidity: {this.props.weather["humidity"]}%</p>
               </div>
          </div>
        );
     }
};

export default Weather;