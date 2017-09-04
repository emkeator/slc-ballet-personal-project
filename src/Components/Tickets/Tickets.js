import React, {Component} from 'react'
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import {loadDancers} from './../../ducks/reducer';
import {url} from './../../ducks/apiGetter';
// import TweenLite from './../../libs/greensock_minified/TweenLite.min';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import axios from 'axios';
import coppelia from './../../images/coppelia.jpeg';
//would also include other images if the tickets were on sale

class Tickets extends Component {
    constructor() {
        super();
        
        this.state = {
            performances: [],
            showName: '',
            specificPerformanceID: -1,
            tickets: [],
            orchestra: [],
            mezzanine: [],
            balcony: [],
            basket: {
                seats: [],
                total: 0
            }
        }
    }

    componentWillMount() {
        // $(document).ready(() => {
        //     $('.seat').click(function(){
        //         $(this).toggleClass('onHold');
        //         console.log($(this));
        //     })
        // });
        
    }

    componentWillReceiveProps(newProps) {
        console.log('My new props are', newProps);
        axios.get(`${url()}/api/performances`)
            .then(res => {
                // console.log('I\'ve got the performances.');
                this.setState({
                    performances: res.data.filter((e) => {if (e.name === newProps.showName) return e})
                }) 
            });
        this.setState({
            showName: newProps.showName
        })


    }

    getTickets(id) {
        axios.get(`${url()}/api/performances/tickets/${id}`)
        .then(res => {
            
            this.setState({
                tickets: res.data,
                orchestra: res.data.slice(0, 86),
                mezzanine: res.data.slice(86, 218),
                balcony: res.data.slice(218),
                specificPerformanceID: +id
            })
            console.log(this.state.orchestra);
        });
        
        
    }

    formatSeating(section) {
        switch (section) {
            case 'orchestra':
                return (<div className="orchestra">
                    <p>{this.state.orchestra.slice(0, 13).map((e) => {
                            return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>          
                        })}</p>
                    <p>{this.state.orchestra.slice(13, 26).map((e) => {
                            return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p>{this.state.orchestra.slice(26, 41).map((e) => {
                            return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p>{this.state.orchestra.slice(41, 56).map((e) => {
                            return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p>{this.state.orchestra.slice(56, 71).map((e) => {
                            return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p>{this.state.orchestra.slice(71).map((e) => {
                            return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>         
                        })}</p>

                </div>);
                break;
                
            case 'mezzanine':
                return (<div className="mezzanine">
                    <p>{this.state.mezzanine.slice(0, 21).map((e) => {
                            return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p>{this.state.mezzanine.slice(21, 42).map((e) => {
                            return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p>{this.state.mezzanine.slice(42, 63).map((e) => {
                            return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p>{this.state.mezzanine.slice(63, 86).map((e) => {
                            return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p>{this.state.mezzanine.slice(86, 109).map((e) => {
                            return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p>{this.state.mezzanine.slice(109).map((e) => {
                            return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>         
                        })}</p>

                </div>);
                break;
            
            case 'balcony':
                return (<div className="balcony">
                    <p>{this.state.balcony.slice(0, 2).map((e) => {
                            return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p className="emptyBalcSpaceA"></p>
                    <p>{this.state.balcony.slice(2, 4).map((e) => {
                            return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>         
                        })}</p><br/>
                    <p>{this.state.balcony.slice(4, 7).map((e) => {
                        return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>         
                    })}</p>
                    <p className="emptyBalcSpaceB"></p>
                    <p>{this.state.balcony.slice(7, 10).map((e) => {
                            return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p>{this.state.balcony.slice(10, 31).map((e) => {
                            return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p>{this.state.balcony.slice(31, 52).map((e) => {
                            return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p>{this.state.balcony.slice(52, 75).map((e) => {
                            return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p>{this.state.balcony.slice(75).map((e) => {
                            return <button className={`seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event)
                                }} 
                                disabled={e.available < 1}> </button>         
                        })}</p>

                </div>);
                break;
            default:
                break;
        }
    }

    handleBasket(seat, event) {
        event.target.classList.toggle('onHold');
        event.target.classList.toggle('available');
        let removed = false;
        let x = this.state.basket.seats.filter((e) => {
            if(e.id !== seat.id) {
                return e;
            } else {
                removed = true;
            }
        })
        if (!removed) {
            x = this.state.basket.seats.slice(0)
            x.push(seat);
            let y = {total: this.state.basket.total + seat.price, seats: x}
            this.setState({
                basket: y
            });
        }
    }

    render() {
        return (<div className="ticketsPage">
                    <div className="ticketsInfo">
                        <h2>{!this.state.showName ? 'Select a show from Season' : this.state.showName}</h2>
                        <div className="selectContainer">
                            <select disabled={this.state.performances.length === 0 ? true : false} onChange={(e) => this.getTickets(e.target.value)} style={{ color: this.state.performances.length === 0 ? '#494E6B' : '#fff'}}>
                                <option disabled selected value>Select a performance date</option>
                                {this.state.performances.length === 0 ? 'Loading shows...' : this.state.performances.map(e => {
                                    return <option key={+e.id} value={+e.id}>{e.show_date}, {e.show_time}</option>
                                })}
                            </select>
                        </div>
                        <div>
                            {this.state.specificPerformanceID === -1 ? '' : this.state.performances.map(e => {                          
                                if (e.id === +this.state.specificPerformanceID) {
                                    return <div key={+e.id}>
                                        <p>{e.show_date}</p>
                                        <p>{e.show_time}</p>
                                        <p><Link to='/theatre'>David Eccles Theatre</Link></p>                                    
                                        <p>Starring: {e.principals}</p>
                                        <img width='250px' src={coppelia} alt="misty copeland in coppelia"/>
                                    </div>
                                }
                            })}
                        </div>
                    </div>
                    <div className="ticketChooser">

                        <h2>Select Seats</h2>
                        {/* <button>View Basket</button> */}
                        {/* <span>{dispaly current seat, price here}</span> */}
                        {this.formatSeating('orchestra')}
                        {this.formatSeating('mezzanine')}
                        {this.formatSeating('balcony')}
                        <span>stage</span>
                                               
                    </div>

                </div>);
    }
}

function mapStateToProps(state) {
    return {
        dancers: state.dancers,
        testing: state.testing,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {})(Tickets);