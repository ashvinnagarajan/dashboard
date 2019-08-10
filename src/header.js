
import React from 'react';

class Header extends React.Component{

    render() {
        return (
            <nav class="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="https://www.bruinracing.com/smv/">
                <h1>Bruin Racing</h1>
              </a>
          
              <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item">
                  Home
                </a>
                <a class="navbar-item">
                  Graphs
                </a>
                </div>
              </div>
          
              <div class="navbar-end">
                <div class="navbar-item">
                  Made by A. Nagarajan
                </div>
              </div>
            </nav>
        );
    }
};

export default Header;