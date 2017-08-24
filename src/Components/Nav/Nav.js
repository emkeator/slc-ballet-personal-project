import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import TweenLite from './../../libs/greensock_minified/TweenLite.min';
import $ from 'jquery';
import menuToggle from './../../images/plus.svg';

class Nav extends Component {
    render() {
        return (<nav className="navMenu"> 
                    <p className="menuToggle" src={menuToggle}>+</p>
                    <div>
                        <ul>
                            <li className="navItem"><Link to="/" className="navLink">Home</Link></li>
                            <li className="navItem"><Link to="/season" className="navLink">Season</Link></li>
                            <li className="navItem"><Link to="/tickets" className="navLink">Tickets</Link></li>
                            <li className="navItem"><Link to="/academy" className="navLink">Academy</Link></li>
                            <li className="navItem"><Link to="/about" className="navLink">Support</Link></li>
                            <li className="navItem"><Link to="/about" className="navLink">About</Link></li>
                        </ul>
                    </div>
                    
                </nav>);
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, {})(Nav);