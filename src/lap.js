import React from 'react';

class Lap extends React.Component{

    render() {
        return (
          <div>
               <div className="card-content">
                    <p className="subtitle is-6">Lap: 2</p>
                    <p className="subtitle is-6">Current Lap: 1:40:23</p>
                    <p className="subtitle is-6">Total: 2:56:23</p>
               </div>
          </div>
        );
     }
};

     
export default Lap;