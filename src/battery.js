import React from 'react';

class Battery extends React.Component{

    render() {
        return (
          <div className="battery">
               <div className="card-content">
                    <p className="title is-5">Battery</p>
                    <p className="subtitle is-6">12 V | 36 A</p>
                    <p className="subtitle is-6">Temp: 52 F</p>
                    <p className="subtitle is-6">Remaining: 45%</p>
               </div>
          </div>
        );
     }
};

     
export default Battery;