import React from 'react';

class Speed extends React.Component{

    render() {
        return (
          <div className="card speed">
               <div className="card-content">
                    <p className="title is-2">17 mph</p>
                    
                    <p className="title is-6">Throttle: 65%</p>
                    <p className="title is-6">Brake: 25%</p>
               </div>
          </div>
        );
     }
};

export default Speed;