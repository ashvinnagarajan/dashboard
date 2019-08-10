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
// import BarExample from './bar';
// import HorizontalBarExample from './horizontalBar';
// import RadarExample from './radar';
// import PolarExample from './polar';
// import BubbleExample from './bubble';
// import ScatterExample from './scatter';
// import MixedDataExample from './mix';
// import RandomizedDataLineExample from './randomizedLine';
// import CrazyDataLineExample from './crazyLine';
// import LegendOptionsExample from './legend-options';
// import LegendHandlersExample from './legend-handlers';

function App() {
  return (
    <div className="App">
      <Header />


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
