import React from 'react';

class Driver extends React.Component{


     render() {
          return (
          <div className="card driver">
               <div className="columns">
               <div className="card-content column">
                    <div className="is-pulled-left">
                         <figure className="image is-48x48">
                              <img src={this.props.driver["image"]} alt=""/>
                         </figure>

                         <div className="media-content">
                         <p className="title is-4">{this.props.driver["name"]}</p>
                         <p className="subtitle is-6">{this.props.driver["social"]} &nbsp; {this.props.driver["phone"]}</p>
                         </div>

                         <div className="content">
                              <p className="subtitle is-6">{this.props.driver["message"]}</p>
                         </div>
                    </div>
               </div>

               <div className="column">
                    <img className="car-image is-pulled-right" src="./images/car.png" alt=""/>  
               </div>
               </div>
          </div>
        );
     }
};

     
export default Driver;