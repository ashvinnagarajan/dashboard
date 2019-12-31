import React from 'react';
import firebase from '../firebase.js'

var latestTime1 = "";
var latestTime2 = "";
var latestTime3 = [];
class Controls extends React.Component{

    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.lap = this.lap.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.getTime = this.getTime.bind(this);
    }

    lap() {
        var lap = 0;

        let database = firebase.database();
        database.ref("Lap").on('value', (snapshot) => {
            lap = snapshot.val();
        });
       
        var postData = lap+1;

        var updates = {};
        updates["Lap"] = postData;

        firebase.database().ref().update(updates);

        latestTime3.push(this.getTime());

        console.log(latestTime3)

        this.forceUpdate();
    }

    start() {
        var postData = "True";
        
        var updates = {};
        updates["Running"] = postData;

        firebase.database().ref().update(updates);

        latestTime1 = this.getTime();
        latestTime2 = "";
        latestTime3 = [];

        this.forceUpdate();
    }

    stop() {
        var postData = "False";
        
        var updates = {};
        updates["Running"] = postData;
        updates["Lap"] = 0;

        firebase.database().ref().update(updates);

        latestTime2 = this.getTime();
        
        this.forceUpdate();
    }

    getTime() {
        var today = new Date();
        var endString = " AM";
        var hours = today.getHours();
        if (hours > 12) {
          hours -= 12;
          endString = " PM";
        };
        var time1 = hours + ":" + today.getMinutes() + ":" + today.getSeconds() + endString;

        return time1;
    }

    render() {

        return (
          <div className="controls">
               <div className="card-content">
                <div className="columns">
                    <div className="column is-one-fifth">
                    <button onClick={this.start} className="button is-primary control-button">Start</button>
                    </div>
                    <div className="column">
                        <p className="title is-5">Time: {latestTime1}</p>
                    </div>
                </div>
                <hr/>
                <div className="columns">
                    <div className="column is-one-fifth">
                    <button onClick={this.stop} className="button is-danger control-button">Stop</button>
                    </div>
                    <div className="column">
                        <p className="title is-5">Time: {latestTime2}</p>
                    </div>
                </div>
                <hr/>
                <div className="columns">
                    <div className="column is-one-fifth">
                    <button onClick={this.lap} className="button is-info control-button">Lap</button>
                    </div>
                    <div className="column">
                        <p className="title is-5">Time: {latestTime3.map(item => {
                            return <li>{item}</li>;
                            })}
                        </p>
                    </div>
                </div>
                
               </div>
          </div>
        );
     }
};

export default Controls;