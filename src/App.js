import React from 'react';
import firebase from './firebase.js'
import './App.css';

// HERE IS THE WEBSITE IM USING FOR THE GRAPH EXAMPLES SUPER HELPFUL
// https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/line.js
// http://jerairrest.github.io/react-chartjs-2/

import Header from './components/header';

import Driver from './components/driver';
import Car from './components/car';
import Track from './components/track';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      latestTime: '',
      latestTrial: '',
      latestData: {},
      battery: {},
      driver: {},            
      gps: {},
      joulemeter: {},
      lap: {},
      motor: {},
      speed: {},
      track: {},
      weather: {},
    };
  }

  componentDidMount() {
    let database = firebase.database();

    //sets the time
    database.ref("Previous Time").on('value', (snapshot) => {
      var latestTime1 = snapshot.val();

      //sets the trial
      database.ref("Latest Trial").on('value', (snapshot) => {
        var latestTrial1 = snapshot.val();

        //sets the data
        database.ref(latestTrial1).child(latestTime1).on('value', (snapshot) => {
          var latestData1 = {};
          latestData1 = snapshot.val();
          var battery = latestData1["battery"]
          var driver = latestData1["driver"]
          var gps = latestData1["gps"]
          var joulemeter = latestData1["joulemeter"]
          var lap = latestData1["lap"]
          var motor = latestData1["motor"]
          var speed = latestData1["speed"]
          var track = latestData1["track"]
          var weather = latestData1["weather"]

          this.setState({
            latestData: latestData1,
            battery: battery,
            driver: driver,
            gps: gps,
            joulemeter: joulemeter,
            lap: lap,
            motor: motor,
            speed: speed,
            track: track,
            weather: weather,
          })
        });
  
        this.setState({
          latestTrial: latestTrial1
        })
      });

      this.setState({
        latestTime: latestTime1
      })
    });
  }

  render() {
    return (
      <div className="canvas color-dark" style={{paddingTop: '45px'}}>
        <Header/>

        <div className="columns">
          <div className="column">  
            <Driver driver={this.state.driver} />          
            <Car battery={this.state.battery} motor={this.state.motor} joulemeter={this.state.joulemeter} speed={this.state.speed} />
           </div>
          <div className="column">
            <Track gps={this.state.gps} weather={this.state.weather} lap={this.state.lap} track={this.state.track} />
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;
