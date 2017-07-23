import React, { Component } from 'react';
import logo from './tps-starlogo-sm.png';
import './App.css';
import './css/main.css';  
import './css/bootstrap-theme.min.css';
import Navbar from './pages/Navbar.js';
import Footer from './pages/Footer.js';



class App extends Component {
  render() {
    return(
    <div id='root' className='mx-auto mw-100'>
      <div id='navBar' className="text-center"> </div>
      <div id="footer"></div>

    </div>
      );
  };
    
}

export default App;
