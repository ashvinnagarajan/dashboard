import React from 'react';

class Header extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      date: "",
      time: "",
      daysLeft: 0
    };
  }

  componentWillMount() {
    var today = new Date();
    var date1 = today.toDateString();
    var endString = " AM";
    var hours = today.getHours();
    if (hours > 12) {
      hours -= 12;
      endString = " PM";
    };
    var time1 = hours + ":" + today.getMinutes() + ":" + today.getSeconds() + endString;

    var cmas= new Date(2020, 3, 1);
     
    var one_day=1000*60*60*24;
    console.log(cmas)
    console.log(today)
    var daysLeft1 = "Days to Competition: " + (Math.ceil( (cmas.getTime()-today.getTime() )/ one_day ));
    
    this.setState({
      date: date1,
      time: time1,
      daysLeft: daysLeft1
    });
  }

    render() {
        return (
            <nav className="navbar is-fixed-top is-dark color-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://www.bruinracing.com/smv/">
                <h1>Bruin Racing | Super Mileage Vehicle</h1>
              </a>
            </div>
          
            <div className="navbar-end is-hidden-touch">
              <div className="navbar-item">
                Made by A. Nagarajan
              </div>
              <div className="navbar-item">
                {this.state.daysLeft}
              </div>
              <div className="navbar-item">
                {this.state.date}
              </div>
              <div className="navbar-item">
                {this.state.time}
              </div>
            </div>
            </nav>
        );
    }
};

export default Header;