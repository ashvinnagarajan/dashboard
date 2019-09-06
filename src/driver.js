import React from 'react';

class Driver extends React.Component{

    render() {
         console.log(this.props.driver)
        return (
          <div className="card driver columns">
               <div className="card-content column">
                    <div className="media">
                         <div className="media-left">
                         <figure className="image is-48x48">
                              <img src="https://bulma.io/images/placeholders/96x96.png" alt=""/>
                         </figure>
                         </div>
                         <div className="media-content">
                         <p className="title is-4"></p>
                         <p className="subtitle is-6">@Lexidriver &nbsp; 973-979-0991</p>
                         </div>
                    </div>

                    <div className="content">
                         <p className="subtitle is-6">Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
               </div>

               <div className="column">
                    <img className="car-image" src="./images/car.png" alt=""/>  
               </div>
          </div>
        );
     }
};

     
export default Driver;