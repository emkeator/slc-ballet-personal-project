import React, { Component } from 'react';
import './_Home.scss';
import {connect} from 'react-redux';
// import TweenLite from './../../libs/greensock_minified/TweenLite.min';
import $ from 'jquery';
import logo from './../../images/balletSLC.svg';

class Home extends Component {
  render() {
    return (
      <div className="landing">
        <div className="behindLogo">
           <img className="logo" src={logo}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, {})(Home);
