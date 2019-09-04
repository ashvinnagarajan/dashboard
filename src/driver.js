import React from 'react';

class Driver extends React.Component{

    render() {
        return (
          <div className="card driver">
               <div className="card-content">
               <div className="media">
                    <div className="media-left">
                    <figure className="image is-48x48">
                         <img src="https://bulma.io/images/placeholders/96x96.png" alt=""/>
                    </figure>
                    </div>
                    <div className="media-content">
                    <p className="title is-4">Lexi</p>
                    <p className="subtitle is-6">@Lexidriver &nbsp; 973-979-0991</p>
                    </div>
               </div>

               <div className="content">
                    <p className="subtitle is-6">Lorem ipsum dolor sit amet, consectetur.</p>
               </div>
               </div>
          </div>
        );
     }
};

     
export default Driver;