import React from 'react';
import './App.css';

// HERE IS THE WEBSITE IM USING FOR THE GRAPH EXAMPLES SUPER HELPFUL
// https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/line.js
// http://jerairrest.github.io/react-chartjs-2/

import Header from './header';
import Footer from './footer';

import DoughnutGraph from './doughnut';
import PieGraph from './pie';
import LineGraph from './line';

function App() {
  return (
    <div>
      <Header/>

      <div class="columns" style={{padding: 100}}>
        <div class="column">
          <DoughnutGraph />
          
          <LineGraph />
        </div>
        <div class="column">
          <PieGraph />
          
          <PieGraph />
        </div>
      </div>


      <Footer />

     </div>

    
  );
}

export default App;
