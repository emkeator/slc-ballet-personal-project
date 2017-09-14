import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import TweenMax from 'gsap';
import $ from 'jquery';

export default class Nav extends Component {

    constructor() {
        super();
        this.state = {
            menuOpen: false,
            currentPath: ''
        }
        
    }

    componentDidMount(){
        if (window.location.hash === '#/') {
            TweenMax.to($('.menuToggle'), 0.01, {color: '#000'})
        } else {
            TweenMax.to($('.menuToggle'), 0.01, {color: '#fff'})
        }
    }

    componentDidUpdate(){
        if (window.location.hash === '#/') {
            TweenMax.to($('.menuToggle'), 0.01, {color: '#000'})
        } else {
            TweenMax.to($('.menuToggle'), 0.01, {color: '#fff'})
        }
    }
 
    toggleMenu() {
        if(!this.state.menuOpen) {
            TweenMax.to($('.navMenu div'), 0.05, {top: '-250px', right: '-250px'});
            TweenMax.to($('.menuToggle'), 1, {transform: 'rotate(45deg)', color: '#fff', delay: 0.05});
            TweenMax.to($('.navMenu div'), 1, {opacity:'1', delay: 0.05});
        } else {
            TweenMax.to($('.navMenu div'), 0.05, {top: '-500px', right: '-500px', delay: 1});
            if(window.location.hash === '#/') {
                TweenMax.to($('.menuToggle'), 1, {transform: 'none', color: '#000'});
            } else {
                TweenMax.to($('.menuToggle'), 1, {transform: 'none', color: '#fff'});
            }
            TweenMax.to($('.navMenu div'), 1, {opacity:'0'});
        }
        let x = this.state.menuOpen ? false : true;
        this.setState({
            menuOpen: x
        })
    }

    hideMenu() {
        TweenMax.to($('.navMenu div'), 0.05, {top: '-500px', right: '-500px', delay: 1});
        if(window.location.hash === '#/') {
            TweenMax.to($('.menuToggle'), 1, {transform: 'none', color: '#000'});
        } else {
            TweenMax.to($('.menuToggle'), 1, {transform: 'none', color: '#fff'});
        }
        TweenMax.to($('.navMenu div'), 1, {opacity:'0'});
        this.setState({
            menuOpen: false
        })
    }

    hoverColor(e, boolean) {
        e.preventDefault();
        if (boolean) {
            TweenMax.to($('.menuToggle'), 0.01, {color: '#985E6D'});
        } else {
            if(window.location.hash === '#/') {
                TweenMax.to($('.menuToggle'), 0.01, {color: '#000'});
            } else {
                TweenMax.to($('.menuToggle'), 0.01, {color: '#fff'});
            }
        }
    }

    changePage(e) {
        e.preventDefault();
        this.props.coverPage(window.location.hash.slice(1))
        let goTo = e.target.getAttribute('href');
        // this.props.coverPage(goTo.slice(1));
        this.props.unCoverPage(goTo.slice(1));        
        console.log(goTo)
        setTimeout(function(){
            window.location = goTo;
        }, 1300);
    }

    render() {
        return (<nav className="navMenu"> 
                    <p className="menuToggle" onMouseOver={(e) => this.hoverColor(e, true)} onMouseOut={(e) => this.hoverColor(e, false)} onClick={() => this.toggleMenu()}>+</p>
                    <div >
                        <ul>
                            <li className="navItem"><Link onClick={(e) => {this.hideMenu(); this.changePage(e);}} to="/" className="navLink">Home</Link></li>
                            <li className="navItem"><Link onClick={(e) => {this.hideMenu(); this.changePage(e);}} to="/season" className="navLink">Season</Link></li>
                            <li className="navItem"><Link onClick={(e) => {this.hideMenu(); this.changePage(e);}} to="/support" className="navLink">Support</Link></li>
                            <li className="navItem"><Link onClick={(e) => {this.hideMenu(); this.changePage(e);}} to="/about" className="navLink">About</Link></li>
                        </ul>
                    </div>
                    
                </nav>);
    }
}
