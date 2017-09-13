import React, { Component } from 'react';
import './main.css';
import Nav from './Components/Nav/Nav';
import router from './router';
// import logo from './images/balletSLC.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        {router}
        <Nav/>  
      </div>
    );
  }
}

export default App;
