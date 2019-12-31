import React from 'react';
import {weatherApiKeyHidden} from '../config'

const lat = "34.0689";
const long = "-118.4452";

class Weather extends React.Component{
     constructor(props){
          super(props);

          this.state = {
               desc: "",
               temp: "",
               humidity: "",
               wind: "",
          };
     }

     getWeather = async () => {
          // e.preventDefault();
          const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${weatherApiKeyHidden}&units=imperial`);
          const data = await api_call.json();

          console.log(data);

          this.setState({
               desc: data.weather[0].main,
               temp: data.main.temp,
               humidity: data.main.humidity,
               wind: data.wind.speed,
          })
     }

    render() {
          this.getWeather();
        return (
          <div className="weather">
               <div className="card-content">
                    <p className="title is-6">{this.state.desc}</p>
                    <p className="title is-6">{this.state.temp} F</p>
                    <p className="title is-6">Humidity: {this.state.humidity}%</p>
                    <p className="title is-6">Wind: {this.state.wind} mph</p>
               </div>
          </div>
        );
     }
};

export default Weather;