import React, {Component} from 'react'
// import {Link} from 'react-router-dom';
import {url} from './../../ducks/apiGetter';
// import TweenLite from './../../libs/greensock_minified/TweenLite.min';
import Checkout from './../Checkout/Checkout';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class Tickets extends Component {
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
            },
            currentLevel: '',
            currentSeat: '',
            stripeKeyPublishable: '',
            justPurchased: false
        }
        this.checkoutNow = this.checkoutNow.bind(this);
    }

    componentWillMount() {
        axios.get(`${url()}/stripeKeyPub`)
        .then( res => {
                this.setState({
                    stripeKeyPublishable: res.data.stripeKeyPublishable
                });
            }
        )
    }

    componentWillReceiveProps(newProps) {
        axios.get(`${url()}/api/performances`)
            .then(res => {
                this.setState({
                    performances: res.data.filter((e) => {if (e.name === newProps.showName) return e})
                })
                return res.data;
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
        });
        
        
    }

    formatSeating(section) {
        switch (section) {
            case 'orchestra':
                return (<div className="orchestra" onClick={(e) => this.highlightSection(e)}>
                    <p className="orchSeat">{this.state.orchestra.slice(0, 13).map((e) => {
                            return <button className={`orchSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)} 
                                disabled={e.available < 1}> </button>          
                        })}</p>
                    <p className="orchSeat">{this.state.orchestra.slice(13, 26).map((e) => {
                            return <button className={`orchSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)} 
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p className="orchSeat">{this.state.orchestra.slice(26, 41).map((e) => {
                            return <button className={`orchSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)} 
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p className="orchSeat">{this.state.orchestra.slice(41, 56).map((e) => {
                            return <button className={`orchSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)} 
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p className="orchSeat">{this.state.orchestra.slice(56, 71).map((e) => {
                            return <button className={`orchSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)} 
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p className="orchSeat">{this.state.orchestra.slice(71).map((e) => {
                            return <button className={`orchSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)} 
                                disabled={e.available < 1}> </button>         
                        })}</p>

                </div>);
                break;
                
            case 'mezzanine':
                return (<div className="mezzanine" onClick={(e) => this.highlightSection(e)}>
                    <p className="mezSeat">{this.state.mezzanine.slice(0, 21).map((e) => {
                            return <button className={`mezSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)}  
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p className="mezSeat">{this.state.mezzanine.slice(21, 42).map((e) => {
                            return <button className={`mezSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)}  
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p className="mezSeat">{this.state.mezzanine.slice(42, 63).map((e) => {
                            return <button className={`mezSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)}  
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p className="mezSeat">{this.state.mezzanine.slice(63, 86).map((e) => {
                            return <button className={`mezSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)}  
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p className="mezSeat">{this.state.mezzanine.slice(86, 109).map((e) => {
                            return <button className={`mezSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)}  
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p className="mezSeat">{this.state.mezzanine.slice(109).map((e) => {
                            return <button className={`mezSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)}  
                                disabled={e.available < 1}> </button>         
                        })}</p>

                </div>);
                break;
            
            case 'balcony':
                return (<div className="balcony" onClick={(e) => this.highlightSection(e)}>
                    <p className="balcSeat">{this.state.balcony.slice(0, 2).map((e) => {
                            return <button className={`balcSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)}  
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p className="balcSeat emptyBalcSpaceA"></p>
                    <p className="balcSeat">{this.state.balcony.slice(2, 4).map((e) => {
                            return <button className={`balcSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)}  
                                disabled={e.available < 1}> </button>         
                        })}</p><br/>
                    <p className="balcSeat">{this.state.balcony.slice(4, 7).map((e) => {
                        return <button className={`balcSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)}  
                                disabled={e.available < 1}> </button>         
                    })}</p>
                    <p className="balcSeat emptyBalcSpaceB"></p>
                    <p className="balcSeat">{this.state.balcony.slice(7, 10).map((e) => {
                            return <button className={`balcSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)}  
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p className="balcSeat">{this.state.balcony.slice(10, 31).map((e) => {
                            return <button className={`balcSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)}  
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p className="balcSeat">{this.state.balcony.slice(31, 52).map((e) => {
                            return <button className={`balcSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)}  
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p className="balcSeat">{this.state.balcony.slice(52, 75).map((e) => {
                            return <button className={`balcSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)}  
                                disabled={e.available < 1}> </button>         
                        })}</p>
                    <p className="balcSeat">{this.state.balcony.slice(75).map((e) => {
                            return <button className={`balcSeat seat${e.available === 2 ? ' onHold' : e.available > 0 ? ' available' : ''}`} key={e.id} onClick={(event) => {
                                    this.handleBasket(e, event.target)
                                }}
                                onMouseOver={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, true)}
                                onMouseOut={(event) => this.showCurrentSeat(event, e.available, e.seat_row, e.num, e.price, false)}  
                                disabled={e.available < 1}> </button>         
                        })}</p>

                </div>);
                break;
            default:
                break;
        }
    }

    showCurrentSeat(event, available, seat_row, num, price, isMouseOverMe){
        event.preventDefault();
        event.stopPropagation();
        let inCart = '';
        if (event.target.classList[2] === 'onHold') inCart = ' - IN BASKET'
        if(isMouseOverMe) {
            this.setState({
                currentSeat: `${seat_row}${num}   $${price}${inCart}`
            });
        } else {
            this.setState({
                currentSeat: ''
            });
        }
    }
    
    resetLevels() {
        this.setState({
            currentLevel: ''
        });
        $('.balcony').css('transform', 'none');
        $('.balcony').css('transform', 'rotate3d(1.5, 1.5, -4, 166deg) scale(0.8)');
        
        $('.mezzanine').css('transform', 'none');
        $('.mezzanine').css('transform', 'rotate3d(1.5, 1.5, -4, 166deg) scale(0.8)');
        
        $('.orchestra').css('transform', 'none');
        $('.orchestra').css('transform', 'rotate3d(1.5, 1.5, -4, 166deg) scale(0.8)');
        
        $('.balcony').css('top', '-200px');
        $('.mezzanine').css('top', '0px');                
        $('.orchestra').css('top', '200px');
    }

    highlightSection(event) {
        event.preventDefault();
        event.stopPropagation();
        let target = event.target.classList[0];
        
        this.resetLevels()
        switch (target) {
            case ('balcony'):
                this.setState({
                    currentLevel: 'balcony'
                });
                $('.balcony').css('top', '-220px');
                $('.balcony').css('transform', 'rotate3d(0, 0, -1, 180deg) scale(0.9)');

                $('.mezzanine').css('top', '50px');
                $('.orchestra').css('top', '250px');

                $('.mezzanine').css('transform', 'rotate3d(1.5, 1.5, -4, 166deg) scale(0.7)');
                $('.orchestra').css('transform', 'rotate3d(1.5, 1.5, -4, 166deg) scale(0.7)');
                break;
            case ('balcSeat'):
                this.setState({
                    currentLevel: 'balcony'
                });
                $('.balcony').css('top', '-220px');
                $('.balcony').css('transform', 'rotate3d(0, 0, -1, 180deg) scale(0.9)');

                $('.mezzanine').css('top', '50px');
                $('.orchestra').css('top', '250px');

                $('.mezzanine').css('transform', 'rotate3d(1.5, 1.5, -4, 166deg) scale(0.7)');
                $('.orchestra').css('transform', 'rotate3d(1.5, 1.5, -4, 166deg) scale(0.7)');
                break;

            case ('mezzanine'):
                this.setState({
                    currentLevel: 'mezzanine'
                });
                $('.mezzanine').css('top', '20px');
                $('.mezzanine').css('transform', 'rotate3d(0, 0, -1, 180deg) scale(0.9)');

                $('.balcony').css('top', '-250px');
                $('.orchestra').css('top', '290px');

                $('.balcony').css('transform', 'rotate3d(1.5, 1.5, -4, 166deg) scale(0.7)');
                $('.orchestra').css('transform', 'rotate3d(1.5, 1.5, -4, 166deg) scale(0.7)');
                break;
            case ('mezSeat'):
                this.setState({
                    currentLevel: 'mezzanine'
                });
                $('.mezzanine').css('top', '20px');
                $('.mezzanine').css('transform', 'rotate3d(0, 0, -1, 180deg) scale(0.9)');

                $('.balcony').css('top', '-250px');
                $('.orchestra').css('top', '290px');

                $('.balcony').css('transform', 'rotate3d(1.5, 1.5, -4, 166deg) scale(0.7)');
                $('.orchestra').css('transform', 'rotate3d(1.5, 1.5, -4, 166deg) scale(0.7)');
                break;

            case ('orchestra'):
                this.setState({
                    currentLevel: 'orchestra'
                });
                $('.orchestra').css('top', '220px');
                $('.orchestra').css('transform', 'rotate3d(0, 0, -1, 180deg) scale(0.9)');

                $('.balcony').css('top', '-250px');
                $('.mezzanine').css('top', '-50px');

                $('.balcony').css('transform', 'rotate3d(1.5, 1.5, -4, 166deg) scale(0.7)');
                $('.mezzanine').css('transform', 'rotate3d(1.5, 1.5, -4, 166deg) scale(0.7)');
                break;
            case ('orchSeat'):
                this.setState({
                    currentLevel: 'orchestra'
                });
                $('.orchestra').css('top', '220px');
                $('.orchestra').css('transform', 'rotate3d(0, 0, -1, 180deg) scale(0.9)');

                $('.balcony').css('top', '-250px');
                $('.mezzanine').css('top', '-50px');

                $('.balcony').css('transform', 'rotate3d(1.5, 1.5, -4, 166deg) scale(0.7)');
                $('.mezzanine').css('transform', 'rotate3d(1.5, 1.5, -4, 166deg) scale(0.7)');
                break;

            default: 
                this.resetLevels();
        }
        // console.log(event.target.classList[0]);
    }

    handleBasket(seat, target) {
        //seat = {thisSeatObj: {seatinfo}, target: eventtarget}
        let clickedSeat = {thisSeatObj: seat, target: target};
        target.classList.toggle('onHold');
        target.classList.toggle('available');
        let removed = false;

        let x = this.state.basket.seats.filter((e) => {
            if(e.thisSeatObj.id !== seat.id) {
                //if the id in thisSeatObj's info matches the passed-in seat...
                return e;
            } else {
                removed = true;
            }
        })
        if (!removed) {
            //push in the new clickedSeat obj, complete with its event target being tracked
            x = this.state.basket.seats.slice(0)
            x.push(clickedSeat);
            let y = {total: this.state.basket.total + seat.price, seats: x}
            this.setState({
                basket: y
            });
        } else {
            let y = {total: this.state.basket.total - seat.price, seats: x}
            this.setState({
                basket: y
            }); 
        }
    }

    showBasket(showYesOrNo) {
        if(showYesOrNo) {
            $('.ticketCheckout').css('display', 'flex');
        } else {
            $('.ticketCheckout').hide();
        }
    }

    
    checkoutNow(){
        this.setState({
            justPurchased: true
        })
        let body = { action: 0, tickets: []};
        this.state.basket.seats.map(seat => {
            let {specific_performance_id, section, seat_row, num} = seat.thisSeatObj;
            body.tickets.push({specific_performance_id, section, seat_row, num})
        });
        axios.patch(`${url()}/api/performances/tickets/updateMany`, body)
            .then(res => {
                this.getTickets(this.state.specificPerformanceID);
                this.setState({
                    basket: {total: 0, seats: []}
                });
            });
        setTimeout(() => {
            this.setState({
                justPurchased: false
            })
            this.showBasket(false);
        }, 5000);
    }

    render() {
        return (<div className="ticketsPage">
                    <div className="ticketsInfo" onClick={(e) => this.highlightSection(e)}>
                        <h2 onClick={(e) => this.highlightSection(e)}>{!this.state.showName ? 'Select a show from Season' : this.state.showName}</h2>
                        <div className="selectContainer">
                            <select onClick={(e) => this.highlightSection(e)} disabled={this.state.performances.length === 0 ? true : false} onChange={(e) => this.getTickets(e.target.value)} style={{ color: this.state.performances.length === 0 ? '#606060' : '#fff'}}>
                                <option disabled selected value>Select a performance date</option>
                                {this.state.performances.length === 0 ? 'Loading shows...' : this.state.performances.map(e => {
                                    return <option key={+e.id} value={+e.id}>{e.show_date}, {e.show_time}</option>
                                })}
                            </select>
                        </div>
                        <div onClick={(e) => this.highlightSection(e)}>
                            {this.state.specificPerformanceID === -1 ? '' : this.state.performances.map(e => {                          
                                if (e.id === +this.state.specificPerformanceID) {
                                    return <div key={+e.id} onClick={(e) => this.highlightSection(e)}>
                                        <p>{e.show_date}</p>
                                        <p>{e.show_time}</p>
                                        <p><Link to='/theatre'>David Eccles Theatre</Link></p>                                    
                                        <p>Starring: {e.principals}</p>
                                    </div>
                                }
                            })}
                        </div>
                    </div>
                    <div className="ticketChooser" onClick={(e) => this.highlightSection(e)}>

                        <h2>Select Seats</h2>
                        <span id="levelSpan">{this.state.currentLevel}</span>
                        <span id="seatSpan">{this.state.currentSeat}</span> 
                        {this.formatSeating('orchestra')}
                        {this.formatSeating('mezzanine')}
                        {this.formatSeating('balcony')}
                        
                        <span id="stageSpan">stage</span>
                                               
                    </div>
                    <div id="basketSpan" onClick={(e) => this.highlightSection(e)}>${this.state.basket.total}  <button disabled={this.state.basket.total === 0 ? true : false} 
                                                                            style={{backgroundColor: this.state.basket.total === 0 ? '#606060': 'rgba(152, 135, 143, 0.85)'}}
                                                                            onClick={() => this.showBasket(true)}>Basket</button></div>

                    <div className="ticketCheckout" >
                            <div>
                                <h1>Basket</h1>
                                <span>{this.state.justPurchased ? `Thank you for your purchase at Ballet SLC!` : `Total: $${this.state.basket.total}`}</span>
                                <div style={{display: this.state.justPurchased ? 'none' : 'block'}}><Checkout className="checkoutStripe"
                                          name={this.state.showName}
                                          description={'Ballet SLC Tickets'}
                                          amount={this.state.basket.total}
                                          stripeKeyPublishable={this.state.stripeKeyPublishable}
                                          checkoutNow={this.checkoutNow}/></div>
                                <ul >
                                    {this.state.basket.seats.map((seat) =>{
                                        //seat = {thisSeatObj: {seat info}, target: target}
                                        return(
                                            <li key={seat.thisSeatObj.id}>
                                                <span>{`${seat.thisSeatObj.section[0].toUpperCase() + seat.thisSeatObj.section.slice(1)} ${seat.thisSeatObj.seat_row}${seat.thisSeatObj.num}`}</span>
                                                <span className="seatPrice">{`$${seat.thisSeatObj.price}`}  <em onClick={() => this.handleBasket(seat.thisSeatObj, seat.target)}>☒</em></span>                                            
                                            </li>
                                        )
                                    })}
                                </ul>
                                <button onClick={() => this.showBasket(false)}>Return to Seats</button>
                            </div>
                    </div>

                </div>);
    }
}