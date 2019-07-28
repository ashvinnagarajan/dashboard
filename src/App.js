import React from 'react';
import './App.css';

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
      <div>
				<hr />
				<DoughnutGraph />
				<hr />
				<PieGraph />
        <hr />
        <LineGraph />
    
    </div>
    </div>

    
  );
}

export default App;
