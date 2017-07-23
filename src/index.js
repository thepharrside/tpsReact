import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './pages/Navbar.js';
import Footer from './pages/Footer.js';
import registerServiceWorker from './registerServiceWorker';
import './css/main.css';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Navbar />, document.getElementById('navBar'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
