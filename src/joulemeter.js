import React from 'react';

class Joulemeter extends React.Component{

    render() {
        return (
          <div className="card joulemeter">
               <div className="card-content">
                    <p className="title is-5">Joulemeter</p>
                    <p className="subtitle is-6">23 V</p>
                    <p className="subtitle is-6">34 A</p>
               </div>
          </div>
        );
     }
};

     
export default Joulemeter;