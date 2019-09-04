import React from 'react';

class Header extends React.Component{

    render() {
        return (
            <nav className="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://www.bruinracing.com/smv/">
                <h1>Bruin Racing | Super Mileage Vehicle</h1>
              </a>
            </div>
          
            <div className="navbar-end">
              <div className="navbar-item">
                Made by A. Nagarajan
              </div>
              <div className="navbar-item">
                Days Until Competition: 244
              </div>
              <div className="navbar-item">
                September 3, 2019
              </div>
              <div className="navbar-item">
                9:34pm
              </div>
            </div>
            </nav>
        );
    }
};

export default Header;