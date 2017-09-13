import React, { Component } from 'react';
import './_Home.scss';
import TweenMax from 'gsap';
import $ from 'jquery';
import logo from './../../images/balletSLC.svg';

export default class Home extends Component {

  componentDidMount() {
    TweenMax.to($('.behindLogo'), 1.5, {opacity: '1', delay: 1.5});
  }

  render() {
    return (
      <div className="landing">
        <div className="behindLogo">
           <img className="logo" src={logo} alt="ballet slc logo"/>
        </div>
      </div>
    );
  }
}

