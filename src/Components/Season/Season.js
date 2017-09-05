import React, {Component} from 'react'
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import {loadDancers} from './../../ducks/reducer';
import {url} from './../../ducks/apiGetter';
// import TweenLite from './../../libs/greensock_minified/TweenLite.min';
import $ from 'jquery';
import Tickets from './../Tickets/Tickets';
import axios from 'axios';
import seasonMobileSVG from './../../images/season.svg';
import seasonFullscreenSVG from './../../images/seasonFullscreen.svg';


class Season extends Component {
    constructor() {
        super();
        
        this.state = {
            seasonShows: [],
            showName: '',
            currentSeason: 'fall'
        }
    }

    componentWillMount() {
        axios.get(`${url()}/api/shows`)
        .then(res => {
            console.log('I\'ve got the shows.');
            this.setState({
                seasonShows: res.data
            }) 
        });
    }

    showTickets(name) {
        console.log('show me perormance name', name);
        this.setState({
            showName: name
        })
    }

    formatShow(show) {
        if (show.on_sale) {
            return (
                <li key={show.id} className="show onSale" onClick={() => this.showTickets(show.name)}>
                    <h3>{show.name}</h3>
                    <span>{show.run_dates}</span>
                    <em>On sale now!</em>                   
                </li>
            );
        } else {
            return (
                <li key={show.id} className="show">
                    <h3>{show.name}</h3>
                    <span>{show.run_dates}</span>                   
                </li>
            );
        }
    }

    render() {
        return (<main className="seasonPage">
                    
                    <div className="seasonPageHeaderContainer">
                        <img src={seasonMobileSVG} alt="Salt Lake Cit Ballet Season" className="mobileHeader"/>
                        <img src={seasonFullscreenSVG} alt="Salt Lake Cit Ballet Season" className="fullscreenHeader"/>                        
                    </div>
                    <div className="seasonPageContainer">
                        <div className="season">
                            <h2>Fall Season</h2>
                            <ul>{this.state.seasonShows.length === 0 ? 'Loading shows...' : this.state.seasonShows.map(e => {
                                if(e.season === this.state.currentSeason) {
                                    return this.formatShow(e);
                                }
                            })}</ul>
                        {/* </div>
                        <div className="season"> */}
                            <h2 className="upcoming">Upcoming Season</h2>
                            <ul>{this.state.seasonShows.length === 0 ? 'Loading shows...' : this.state.seasonShows.map(e => {
                                if(e.season !== this.state.currentSeason) {
                                    return this.formatShow(e);
                                }
                            })}</ul>
                        </div>
                    </div>
                    <div className="seasonPageContainer tickets"><Tickets showName={this.state.showName}/></div>
                    

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

export default connect(mapStateToProps, {})(Season);