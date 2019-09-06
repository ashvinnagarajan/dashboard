import React from 'react';

class Speed extends React.Component{

    render() {
        return (
          <div className="speed">
               <div className="card-content">
                    <p className="title is-2">{this.props.speed.speed} mph</p>
                    
                    <p className="title speed-title is-6">Throttle: {this.props.speed.throttle}%</p>
                    <p className="title speed-title is-6">{this.props.speed.acceleration} m/s<sup>2</sup></p>
                    <p className="title speed-title is-6 is-spaced">Brake: {this.props.speed.brake}%</p>
                    
                    <p className="subtitle is-6">Avg Speed: {this.props.speed.avg} mph</p>
                    <p className="subtitle is-6"></p>
               </div>
          </div>
        );
     }
};

export default Speed;