import React from 'react';

class Joulemeter extends React.Component{

    render() {
        return (
          <div className="joulemeter">
               <div className="card-content">
                    <p className="title is-5">Joulemeter</p>
                    <p className="subtitle is-6">23 V | 34 A</p>
                    <p className="subtitle is-6">Instant Efficiency: 123 W</p>
                    <p className="subtitle is-6">Avg Efficiency: 153 W</p>
                    <p className="subtitle is-6">Peak Efficiency: 100 W</p>
               </div>
          </div>
        );
     }
};

     
export default Joulemeter;