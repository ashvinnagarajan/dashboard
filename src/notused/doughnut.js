
import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
});


class DoughnutGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: getState()};
    
    console.log(this.props.speed);
  }

  render() {
    return (
      <div></div>
    // <div class="card" style={{padding: 50}}>
    //     <div>
    //         <h2>Dynamic DoughnutGraph</h2>
    //     </div>

    //     <div class="card-image">
    //         <Doughnut data={this.state.data}/>
    //     </div>

    //     <div class="card-content">
    //         <div class="content">
    //         This is a graph that has some information about the car. 
    //         <hr />
    //         <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    //         </div>
    //     </div>
    // </div>

    );
  }
};

export default DoughnutGraph;
