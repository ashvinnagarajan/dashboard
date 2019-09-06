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

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      latestTime: '',
      latestTrial: '',
      latestData: {},
    };
  }

  componentDidMount() {
    let database = firebase.database();

    //sets the time
    database.ref("Latest Time").on('value', (snapshot) => {
      var latestTime1 = snapshot.val();

      //sets the trial
      database.ref("Latest Trial").on('value', (snapshot) => {
        var latestTrial1 = snapshot.val();

        //sets the data
        database.ref(latestTrial1).child(latestTime1).on('value', (snapshot) => {
          var latestData1 = snapshot.val();
          this.setState({
            latestData: latestData1
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
      <div className="canvas color-dark" style={{paddingTop: '55px'}}>
        <Header/>

        <div className="columns">
          <div className="column">
            <div className="columns">
              <div className="column">

                <Driver driver={this.state.latestData.driver} />
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
