import React, { Component } from 'react';
import logo from '../tps-starlogo-sm.png';
import '../App.css';
import '../css/main.css'; 

class Footer extends Component {
  render() {
    return(
    	<footer id="footer" className="card-footer fixed-bottom bg-faded text-center text-primary"><br />
    	
    		<div id="footerContents" className="container">Copyright 2017 - ThePharrSide - All Rights Reserved</div>

    	<br /></footer>

    );}
}

export default Footer;