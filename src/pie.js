import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
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
};

class PieGraph extends React.Component{

  render() {
    return (
        
        <div class="card" style={{padding: 50}}>
            <div>
                <h2>Pie Example</h2>
            </div>

            <div class="card-image">
                <Pie data={data} />
            </div>

            <div class="card-content">
                <div class="content">
                This is a graph that has some information about the car. 
                <hr />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
        </div>
        
    );
  }
};

export default PieGraph;