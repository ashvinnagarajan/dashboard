import React from 'react';
import firebase from './firebase.js'
import './App.css';

// HERE IS THE WEBSITE IM USING FOR THE GRAPH EXAMPLES SUPER HELPFUL
// https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/line.js
// http://jerairrest.github.io/react-chartjs-2/

import Header from './header';

import Driver from './driver';
import Car from './car';
import Track from './track';
import Speed from './speed';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      speed: [],
      gps: [],
    };
  }

  componentDidMount() {
    let database = firebase.database();

    database.ref('speed').on('value', (snapshot) => {
      let speedObj = snapshot.val();
      var speedArr = [];
      for(let speeds in speedObj){
        speedArr.push(speedObj[speeds]);
      }
      this.setState({
        speed: speedArr
      });
    });  

    // database.ref("bruin-racing").on('value', (snapshot) => {
    //   let dataObj = snapshot.val();
    //   var speedNum = 0;
    
    //   speedNum = dataObj;
    
    //   this.setState({
    //     speed: speedNum
    //   });
    // });

    // database.ref('gps').on('value', (snapshot) => {
    //   let gpsObj = snapshot.val();
    //   var gpsArr = [];
    //   for(let gps in gpsObj){
    //     gpsArr.push(gpsObj[gps]);
    //   }
    //   this.setState({
    //     gps: gpsArr
    //   });
    // });
  }

  render() {
    return (
      <div className="canvas" style={{paddingTop: '65px'}}>
        <Header/>

        <div className="columns">
          <div className="column">
            <div className="columns">
              <div className="column">
                <Driver/>
              </div>
              <div className="column">
                <Speed/>
              </div>
            </div>
          
            <Car/>
          </div>
          <div className="column">
            <Track/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
