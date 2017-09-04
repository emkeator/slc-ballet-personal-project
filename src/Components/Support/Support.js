import React, {Component} from 'react'
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import {loadDancers} from './../../ducks/reducer';
import {url} from './../../ducks/apiGetter';
// import TweenLite from './../../libs/greensock_minified/TweenLite.min';
// import $ from 'jquery';
import axios from 'axios';
import mistyCopelandOverlay from './../../images/mistyCopelandTopImg_colorScheme.png';
import mistyCopeland from './../../images/mistyCopeland_colorScheme.png';

class Support extends Component {
    constructor() {
        super();
        
    }

    componentWillMount() {

    }

    render() {
        return (<main className="supportPage">
                    <section className="sectionBG"></section>
                    <div className="supportPageHeaderContainer">
                        <img src={mistyCopeland} className="supportPageImageUnder" alt="Misty Copeland"/>
                        <h1>Support</h1>
                        <img src={mistyCopelandOverlay} className="supportPageImageOver" alt="Misty Copeland"/>
                    </div>
                    <section>
                        Your gift ensures that Salt Lake City Ballet continues to perform a repertory of thrilling works that is unparalleled the world over.
                        <form>
                            <input className="nameInput" placeholder="Name"></input>
                            <input className="emailInput" placeholder="Email"></input>
                            <br/>
                            <span>Your Donation:</span><input className="donationInput" placeholder="Gift"></input>
                            <button>Donate</button>
                            {/*ADD STRIPE!!!!!!!  */}
                        </form>
                    </section>
                    
                    

                </main>);
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {})(Support);