import React from 'react';

class Motor extends React.Component{

    render() {
        return (
          <div className="motor">
               <div className="card-content">
                    <p className="title is-5">Motor</p>
                    <p className="subtitle is-6">123 BHP | 12 V</p>
                    <p className="subtitle is-6">Temp: 45 F</p>
               </div>
          </div>
        );
     }
};

     
export default Motor;