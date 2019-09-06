import React from 'react';

class Lap extends React.Component{

    render() {
        return (
          <div>
               <div className="columns">
                    <div className="column">
                         <div className="card-content">
                              <p className="subtitle is-6">Lap: 2</p>
                              <p className="subtitle is-6">Current Lap: 1:40:23</p>
                              <p className="subtitle is-6">Total: 2:56:23</p>
                         </div>
                    </div>
                    <div className="column">
                         <div className="card-content">
                              <p className="subtitle is-6">Time Remaining: 6:56:23</p>
                              <p className="subtitle is-6">Slowest Lap: 1:40:23</p>
                              <p className="subtitle is-6">Fastest Lap: 2:56:23</p>
                         </div>
                    </div>
               </div>

          </div>
        );
     }
};

     
export default Lap;