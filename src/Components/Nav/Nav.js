import React, {Component} from 'react'
import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';
// import TweenLite from './../../libs/greensock_minified/TweenLite.min';
// import $ from 'jquery';

export default class Nav extends Component {

    constructor() {
        super();
        this.state = {
            menuOpen: false,
            currentPath: ''
        }
        
    }

    componentWillMount(){
        if (this.props.path) {
            this.setState({
                currentPath: this.props.path
            });
        } else {
            this.setState({
                currentPath: ''
            });
        }
    }
 
    toggleMenu() {
        let x = this.state.menuOpen ? false : true;
        this.setState({
            menuOpen: x
        })
    }
    

    render() {
        console.log(this.currentPath)
        return (<nav className="navMenu"> 
                    <p className="menuToggle" style={{color: this.state.currentPath === '/' ? '#000' : '#fff', 
                                                                        transform: this.state.menuOpen ? 'rotate(45deg)':'none'}}
                                                                onClick={() => this.toggleMenu()}>+</p>
                    <div style={{top: this.state.menuOpen ? '-250px' : '-500px', right: this.state.menuOpen ? '-250px' : '-500px'}}>
                        <ul>
                            <li className="navItem"><Link to="/" className="navLink">Home</Link></li>
                            <li className="navItem"><Link to="/season" className="navLink">Season</Link></li>
                            {/* <li className="navItem"><Link to="/academy" className="navLink">Academy</Link></li> */}
                            <li className="navItem"><Link to="/support" className="navLink">Support</Link></li>
                            <li className="navItem"><Link to="/about" className="navLink">About</Link></li>
                        </ul>
                    </div>
                    
                </nav>);
    }
}
