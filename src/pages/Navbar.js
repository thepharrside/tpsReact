import React, { Component } from 'react';
import logo from '../tps-starlogo-sm.png';
import '../App.css';
import '../css/main.css';  


class Navbar extends Component {
  render() {
    return(
        <div className="App text-center">
          <div className="App-header text-center">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="text-info">
             Welcome to thePharrSide 
            </h1>
          
          
          <nav class="nav navbar navbar-toggleable">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
             <div id="navbarNav" className="nav navbar navbar-inverse mx-auto text-center">
              <div id="nav container text-center"> 
                <ul className="row text-center">
                  <li className="mx-auto nav nav-link nav-item col-xs-3 col-sm-2 col-md-2 col-lg-1">
                    <a className="btn btn-lg nav-pills text-center" href="#About">About</a>
                  </li>
                  <li className="mx-auto nav nav-link nav-item col-xs-3 col-sm-2 col-md-2 col-lg-1">
                    <a className="btn btn-lg nav-pills text-center" href="#Articles">Articles</a>
                  </li>
                  <li className="mx-auto nav nav-link nav-item col-xs-4 col-sm-3 col-md-2 col-lg-1">
                    <a className="btn btn-lg nav-pills text-center" href="#Consultation">Consultation</a>
                  </li>
                  <li className="mx-auto nav nav-link nav-item col-xs-3 col-sm-2 col-md-2 col-lg-1">
                    <a className="btn btn-lg nav-pills text-center" href="#Products">Products</a>
                  </li>
                  <li className="mx-auto nav nav-link nav-item col-xs-3 col-sm-2 col-md-2 col-lg-1">
                    <a className="btn btn-lg nav-pills text-center" href="#Search">Search</a>
                  </li>
                  <li className="mx-auto nav nav-link nav-item col-xs-3 col-sm-2 col-md-2 col-lg-1">
                    <a className="btn btn-lg nav-pills text-center" href="#Services">Services</a>
                  </li>
                  <li className="mx-auto nav nav-link nav-item col-xs-3 col-sm-2 col-md-2 col-lg-1">
                    <a className="btn btn-lg nav-pills text-center" href="#ContactUs">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>        
        </div>
      </div>
      );
  };
}

export default Navbar;