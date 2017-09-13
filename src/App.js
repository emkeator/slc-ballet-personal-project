import React, { Component } from 'react';
import './main.css';
import Nav from './Components/Nav/Nav';
import router from './router';
import TweenMax from 'gsap';
import $ from 'jquery';

class App extends Component {

  constructor() {
      super();
      this.state = {
          currentPage: ''
      }
      this.cover = this.cover.bind(this);
      this.unCover = this.unCover.bind(this);
      
  }
  componentDidMount() {
    TweenMax.to($('#overAllTopLeft'), 1.2, { top: '-100vh', delay: '1', ease: TweenMax.Power1.easeOut });
    TweenMax.to($('#overAllTopRight'), 1.2, { top: '-100vh', delay: '1', ease: TweenMax.Power1.easeOut });
    TweenMax.to($('#overAllBottomLeft'), 1.2, { top: '-50vh', delay: '1', ease: TweenMax.Power1.easeOut });
    TweenMax.to($('#overAllBottomRight'), 1.2, { top: '-50vh', delay: '1', ease: TweenMax.Power1.easeOut });    
    
  }

  cover(pageName) {
    switch(pageName){
        case('/'):
            TweenMax.fromTo($('#overAllTopLeft'), 1.2, {'top': '100vh', 'left': '0vw'}, { top: '0vh'}, TweenMax.Power1.easeOut);
            TweenMax.fromTo($('#overAllTopRight'), 1.2, {'top': '-100vh', 'left': '50vw'}, { top: '0vh'}, TweenMax.Power1.easeOut);
            TweenMax.fromTo($('#overAllBottomLeft'), 1.2, {'top': '150vh', 'left': '0vw'}, { top: '50vh'}, TweenMax.Power1.easeOut);
            TweenMax.fromTo($('#overAllBottomRight'), 1.2, {'top': '-50vh', 'left': '50vw'}, { top: '50vh'}, TweenMax.Power1.easeOut); 
            break;
        case('/season'):
            TweenMax.fromTo($('#overAllTopLeft'), 1.2, {'top': '0vh', 'left': '100vw'}, { left: '0vw', delay: '0', ease: TweenMax.Power1.easeOut });
            TweenMax.fromTo($('#overAllTopRight'), 1.2, {'top': '0vh', 'left': '150vw'}, { left: '50vw', delay: '0', ease: TweenMax.Power1.easeOut });
            TweenMax.fromTo($('#overAllBottomLeft'), 1.2, {'top': '50vh', 'left': '-100vw'}, { left: '0vw', delay: '0', ease: TweenMax.Power1.easeOut });
            TweenMax.fromTo($('#overAllBottomRight'), 1.2, {'top': '50vh', 'left': '-50vw'}, { left: '50vw', delay: '0', ease: TweenMax.Power1.easeOut });
            break;
        case('/support'):
            TweenMax.fromTo($('#overAllTopLeft'), 1.2, {'top': '0vh', 'left': '-100vw'}, { left: '0vw', delay: '0', ease: TweenMax.Power1.easeOut });
            TweenMax.fromTo($('#overAllTopRight'), 1.2, {'top': '0vh', 'left': '-50vw'}, { left: '50vw', delay: '0', ease: TweenMax.Power1.easeOut });
            TweenMax.fromTo($('#overAllBottomLeft'), 1.2, {'top': '50vh', 'left': '100vw'}, { left: '0vw', delay: '0', ease: TweenMax.Power1.easeOut });
            TweenMax.fromTo($('#overAllBottomRight'), 1.2, {'top': '50vh', 'left': '150vw'}, { left: '50vw', delay: '0', ease: TweenMax.Power1.easeOut });
            break;
        case('/about'):
            TweenMax.fromTo($('#overAllTopLeft'), 1.2, {'top': '-100vh', 'left': '0vw'}, { top: '0vh'}, TweenMax.Power1.easeOut);
            TweenMax.fromTo($('#overAllTopRight'), 1.2, {'top': '100vh', 'left': '50vw'}, { top: '0vh'}, TweenMax.Power1.easeOut);
            TweenMax.fromTo($('#overAllBottomLeft'), 1.2, {'top': '-50vh', 'left': '0vw'}, { top: '50vh'}, TweenMax.Power1.easeOut);
            TweenMax.fromTo($('#overAllBottomRight'), 1.2, {'top': '150vh', 'left': '50vw'}, { top: '50vh'}, TweenMax.Power1.easeOut); 
            break;
        default:
          break;
    }
  }

  unCover(pageName) {
    switch(pageName){
        case('/'):
            TweenMax.to($('#overAllTopLeft'), 1.2, { top: '-100vh', delay: '1.35', ease: TweenMax.Power1.easeIn });
            TweenMax.to($('#overAllTopRight'), 1.2, { top: '100vh', delay: '1.35', ease: TweenMax.Power1.easeIn });
            TweenMax.to($('#overAllBottomLeft'), 1.2, { top: '-50vh', delay: '1.35', ease: TweenMax.Power1.easeIn });
            TweenMax.to($('#overAllBottomRight'), 1.2, { top: '150vh', delay: '1.35', ease: TweenMax.Power1.easeIn }); 
            break;
        case('/season'):
            TweenMax.to($('#overAllTopLeft'), 1.2, { left: '-100vw', delay: '1.75', ease: TweenMax.Power1.easeIn });
            TweenMax.to($('#overAllTopRight'), 1.2, { left: '-50vw', delay: '1.75', ease: TweenMax.Power1.easeIn });
            TweenMax.to($('#overAllBottomLeft'), 1.2, { left: '100vw', delay: '1.75', ease: TweenMax.Power1.easeIn });
            TweenMax.to($('#overAllBottomRight'), 1.2, { left: '150vw', delay: '1.75', ease: TweenMax.Power1.easeIn });
            break;
        case('/support'):
            TweenMax.to($('#overAllTopLeft'), 1.2, { left: '100vw', delay: '1.35', ease: TweenMax.Power1.easeIn });
            TweenMax.to($('#overAllTopRight'), 1.2, { left: '150vw', delay: '1.35', ease: TweenMax.Power1.easeIn });
            TweenMax.to($('#overAllBottomLeft'), 1.2, { left: '-100vw', delay: '1.35', ease: TweenMax.Power1.easeIn });
            TweenMax.to($('#overAllBottomRight'), 1.2, { left: '-50vw', delay: '1.35', ease: TweenMax.Power1.easeIn });
            break;
        case('/about'):
            TweenMax.to($('#overAllTopLeft'), 1.2, { top: '100vh', delay: '1.35', ease: TweenMax.Power1.easeIn });
            TweenMax.to($('#overAllTopRight'), 1.2, { top: '-100vh', delay: '1.35', ease: TweenMax.Power1.easeIn });
            TweenMax.to($('#overAllBottomLeft'), 1.2, { top: '150vh', delay: '1.35', ease: TweenMax.Power1.easeIn });
            TweenMax.to($('#overAllBottomRight'), 1.2, { top: '-50vh', delay: '1.35', ease: TweenMax.Power1.easeIn });
            break;
        default:
          break;

    }
  }

  resetOverAll(page){
      switch(page) {
          case('/'):
              // $('#overAllTopLeft').css({'top': '100vh', 'left': '0vw'});
              // $('#overAllTopRight').css({'top': '-100vh', 'left': '50vw'});
              // $('#overAllBottomLeft').css({'top': '150vh', 'left': '0vw'});
              // $('#overAllBottomRight').css({'top': '-50vh', 'left': '50vw'});
          case('/season'):
              $('#overAllTopLeft').css({'top': '0vh', 'left': '100vw'});
              $('#overAllTopRight').css({'top': '0vh', 'left': '150vw'});
              $('#overAllBottomLeft').css({'top': '50vh', 'left': '-150vw'});
              $('#overAllBottomRight').css({'top': '50vh', 'left': '-100vw'});
              break;
      }
      // $('#overAllTopLeft').css({'top': '-100vh', 'left': '0vw'});
      // $('#overAllTopRight').css({'top': '-100vh', 'left': '50vw'});
      // $('#overAllBottomLeft').css({'top': '-50vh', 'left': '0vw'});
      // $('#overAllBottomRight').css({'top': '-50vh', 'left': '50vw'}); 
  }

  render() {
    return (
      <div className="App">
        {router}
        <div id="overAllTopLeft" className="overAll"></div>
        <div id="overAllTopRight" className="overAll"></div>
        <div id="overAllBottomLeft" className="overAll"></div>
        <div id="overAllBottomRight" className="overAll"></div>
        <Nav coverPage={this.cover} unCoverPage={this.unCover}/>  
      </div>
    );
  }
}

export default App;
