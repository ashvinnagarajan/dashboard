import React from 'react';
import firebase from './firebase.js'
import './App.css';

// HERE IS THE WEBSITE IM USING FOR THE GRAPH EXAMPLES SUPER HELPFUL
// https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/line.js
// http://jerairrest.github.io/react-chartjs-2/

import Header from './header';
import Footer from './footer';

import DoughnutGraph from './doughnut';
import PieGraph from './pie';
import LineGraph from './line';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      speed: [],
      gps: [],
    };
  }

  componentDidMount() {
    // let speedRef = firebase.database().ref('speed');
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

    database.ref('gps').on('value', (snapshot) => {
      let gpsObj = snapshot.val();
      var gpsArr = [];
      for(let gps in gpsObj){
        gpsArr.push(gpsObj[gps]);
      }
      this.setState({
        gps: gpsArr
      });
    });
  }

  render() {
    return (
      <div style={{paddingTop: 100}}>
        <Header/>
        <div>
          {this.state.speed}
          <br/>
          {this.state.gps[0]}
        </div>
        {/* <div class="columns">
          <div class="column">
            <DoughnutGraph speed={this.state.speed} /> */}
            
            <LineGraph />
          {/* </div>
          <div class="column">
            <PieGraph />
            
            <PieGraph />
          </div>
        </div> */}
  
  
        <Footer />
  
      </div>
    );
  }
}

export default App;
