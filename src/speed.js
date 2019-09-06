import React from 'react';

class Speed extends React.Component{

    render() {
        return (
          <div className="speed">
               <div className="card-content">
                    <p className="title is-2">17 mph</p>
                    
                    <p className="title speed-title is-6">Throttle: 65%</p>
                    <p className="title speed-title is-6">Accel: 1.2 m/s<sup>2</sup></p>
                    <p className="title speed-title is-6 is-spaced">Brake: 25%</p>
                    
                    <p className="subtitle is-6">Avg Speed: 15 mph</p>
                    <p className="subtitle is-6"></p>
               </div>
          </div>
        );
     }
};

export default Speed;