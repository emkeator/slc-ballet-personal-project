import React, {Component} from 'react';
import Nav from './../../Components/Nav/Nav';
import {url} from './../../ducks/apiGetter';
// import TweenLite from './../../libs/greensock_minified/TweenLite.min';
import $ from 'jquery';
import axios from 'axios';
import aboutMobileSVG from './../../images/about.svg';
import aboutFullscreenSVG from './../../images/aboutFullscreen.svg';

export default class About extends Component {
    constructor() {
        super();
        
        this.state = {
            dancers: [],
            emailEntry: '',
            nameEntry: '',
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

    handleEmailInput(event) {
        this.setState({
            emailEntry: event.target.value
        });
    }

    handleNameInput(event) {
        this.setState({
            nameEntry: event.target.value
        });
    }

    subscribe() {
        if (this.state.nameEntry.toLowerCase().includes('alan')) {
            alert(`Sorry, Alan Miller, but this is just a class project site, and this ballet company does not actually exist! You will not receive any emails at alienStar@mothership.org.`);
        } else if (this.state.nameEntry.toLowerCase().includes('andi')) {
            alert(`Sorry, Maggie Essence, but this is just a class project site, and this ballet company does not actually exist! You will not receive any emails at meatGap@dogFacts.org.`);
        } else if (this.state.nameEntry.toLowerCase().includes('marissa f')) {
            alert(`Sorry, Princess Hackamore, but this is just a class project site, and this ballet company does not actually exist! You will not receive any emails at makesTheBestSalsa@meatGapManor.org.`);
        } else if (this.state.nameEntry.toLowerCase().includes('janise')) {
            alert(`Sorry, Buddy Charlwood, but this is just a class project site, and this ballet company does not actually exist! You will not receive any emails at thunderFromDownUnder@MorningMeat.org.`);
        } else if (this.state.nameEntry.toLowerCase().includes('andrew acuna')) {
            alert(`Sorry, My Sun and Stars, but this is just a class project site, and this ballet company does not actually exist! You will not receive any emails at juanSnow@tesla.org.`);
        } else {
            alert(`Sorry, ${this.state.nameEntry}, but this is just a class project site, and this ballet company does not actually exist! You will not receive any emails at ${this.state.emailEntry}.`);
        }
        $('input').val('');
    }

    render() {
        return (<main className="aboutPage">
                    <div className="aboutPageHeaderContainer">
                        <img src={aboutMobileSVG} alt="Ballet Salt Lake City about" className="mobileHeader"/>
                        <img src={aboutFullscreenSVG} alt="Ballet Salt Lake City about" className="fullscreenHeader"/>
                    </div>
                    <div className="aboutPageContainer">
                        
                        <p className="aboutPageBallet">
                            Ballet Salt Lake City is one of the foremost dance companies in the world, with a roster 
                            of spectacular dancers and an unparalleled repertory. The Company was founded in 1934 by 
                            Janise Platter and Alan Miller, and it quickly became world-renowned for its athletic and 
                            contemporary style. Marissa Lloyd-Brennon joined Ballet SLC the following year and, with 
                            Miller, helped to build the astounding repertory and firmly establish the Company in Salt 
                            Lake. Ballet SLC is committed to promoting ceative excellence and nurturing a new generation 
                            of dancers and choreographers. 
                        </p>
                        
                        <div className="aboutPageCompany">
                            <h1>company</h1>
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
                            <span className="contactAlignRight">801-555-5555</span>
                            <span>inqueries@slcb.org</span>
                            <span className="contactAlignLeft">973 S Temple, SLC</span>
                        </div>
                        <div className="subscribeDiv">
                            <span className="contactAlignRight widthSides">subscribe:</span>
                            <span className="contactAlignCenter widthCenter"><input placeholder="Name" className="inputFirst" onChange={(event) => this.handleNameInput(event)}></input></span>
                            <span className="contactAlignLeft widthSides"><input placeholder="Email" onChange={(event) => this.handleEmailInput(event)}></input></span>
                            <span><button type="button" disabled={this.state.emailEntry.length === 0 ? true : false} onClick={() => this.subscribe()} style={{backgroundColor: this.state.emailEntry.length === 0 ? '#606060': 'rgba(152, 135, 143, 0.85)'}}>Subscribe</button></span>
                        </div>
                    </div>
                </main>);
    }
}