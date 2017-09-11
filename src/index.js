import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
// import store from './store';
// import configureStore from './store';
// const store = configureStore();

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();
