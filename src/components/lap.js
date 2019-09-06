import React from 'react';

class Lap extends React.Component{

    render() {
        return (
          <div>
               <div className="columns">
                    <div className="column">
                         <div className="card-content">
                              <p className="subtitle is-6">Lap: {this.props.lap["number"]}</p>
                              <p className="subtitle is-6">Current Lap: {this.props.lap["current"]}</p>
                              <p className="subtitle is-6">Total: {this.props.lap["total"]}</p>
                         </div>
                    </div>
                    <div className="column">
                         <div className="card-content">
                              <p className="subtitle is-6">Time Remaining: {this.props.lap["remaining"]}</p>
                              <p className="subtitle is-6">Slowest Lap: {this.props.lap["slowest"]}</p>
                              <p className="subtitle is-6">Fastest Lap: {this.props.lap["fastest"]}</p>
                         </div>
                    </div>
               </div>

          </div>
        );
     }
};

     
export default Lap;