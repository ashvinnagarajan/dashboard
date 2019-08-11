import React from 'react';

class Footer extends React.Component{

    render() {
        return (
        <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
            <div style={{padding: 50, width: 750}}>
                <p class="is-size-5" >
                This is a site designed to display Bruin Racing's DAQ system.
                We will display information to the driver and pit crew in real time from an on-board MCU.
                </p>
                <hr/>
                <p class="is-size-5">
                If you want to help out, please shoot us an email at 
                <a class="has-text-white" href="mailto:ashvinagarajan@gmail.com">ashvinagarajan@gmail.com</a>!
                </p>
            </div>
        
            <div class="navbar-end">
            <div class="navbar-item" style={{padding:50}}>
                Made by A. Nagarajan
            </div>
            </div>
        </nav>
        );
    }
};

export default Footer;