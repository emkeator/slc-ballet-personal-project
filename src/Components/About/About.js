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

class About extends Component {
    constructor() {
        super();
        
        this.state = {
            dancers: []
        }
    }

    componentWillMount() {
        axios.get(`${url()}/api/dancers`)
        .then(res => {
            console.log('I\'ve got the dancers.');
            this.setState({
                dancers: res.data
            }) 
        });
    }

    componentDidMount() {
    }

    render() {
        return (<main className="aboutPage">
                    <div className="aboutPageContainer">
                        <h1 className="aboutPageHeaderContainer">About</h1>
                        <p className="aboutPageBallet">
                            Valar morghulis. Valar morghulis. Skoriot nuhyz zaldrizesse ilzi? Sikudi nopazmi! Skoros morghot vestri? Skorī demalyti tymptir tymis, erinis ia morghulis. Valor dohaeris. Daoruni gimi, Ionos Sonaro. Ao ynoma diniluks? Toli rhuqo lotinti, kostilus. Vilibazmosa iderenni emilun. Tubi daor. Bantis zobrie issa se ossyngnoti ledys. Nuhor lir gurenna. Valor dohaeris. Valar morghulis. Valar morghulis.
                        </p>
                    </div>
                    
                    <div className="aboutPageContainer containDancers">
                        <div className="dancersHeader">
                            <h1>company</h1>
                        </div>
                        <div className="aboutPageCompany">
                            <div>
                                <h2>Principals</h2>
                                <ul>
                                    {this.state.dancers.length === 0 ? 'Loading principals...' : this.state.dancers.map(e => {
                                        if(e.position === 'Principal') return <li key={e.id}>{e.name}</li>
                                    })}
                                </ul>
                            </div>
                            <div>
                                <h2>Soloists</h2>
                                <ul>
                                    {this.state.dancers.length === 0 ? 'Loading soloists...' : this.state.dancers.map(e => {
                                        if(e.position === 'Soloist') return <li key={e.id}>{e.name}</li>
                                    })}
                                </ul>
                            </div>
                            <div>
                                <h2>Corps de Ballet</h2>
                                <ul>
                                    {this.state.dancers.length === 0 ? 'Loading corps de ballet...' : this.state.dancers.map(e => {
                                        if(e.position === 'Corps de Ballet') return <li key={e.id}>{e.name}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="contact">
                        <div>
                            <h2>contact</h2>
                            <span>801-555-5555</span>
                            <span>inqueries@slcb.org</span>
                            <span>973 S Temple, SLC</span>
                        </div>
                        <div>
                            <span className="contactAlignRight">subscribe:</span>
                            <span><input placeholder="Name" className="inputFirst"></input></span>
                            <span className="contactAlignLeft"><input placeholder="Email"></input></span>
                            <span><button>Subscribe</button></span>
                        </div>
                    </div>

                </main>);
    }
}

function mapStateToProps(state) {
    return {
        dancers: state.dancers,
        testing: state.testing,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {})(About);