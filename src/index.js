import React from 'react';
import ReactDOM from 'react-dom';
import  './bootstrap.min.css';
import './index.css';
import './font.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';



ReactDOM.render((
    <Router>
        <App />
    </Router>), document.getElementById('root'));
registerServiceWorker();
