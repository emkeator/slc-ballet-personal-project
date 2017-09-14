import React, {Component} from 'react';
import {url} from './../../ducks/apiGetter';
import TweenMax from 'gsap';
import Checkout from './../Checkout/Checkout';
import $ from 'jquery';
import axios from 'axios';
import supportMobileSVG from './../../images/support.svg';
import supportFullscreenSVG from './../../images/supportFullscreen.svg';

export default class Support extends Component {
    constructor() {
        super();
        
        this.state = {
            emailEntry: '',
            nameEntry: '',
            donationAmount: '',
            stripeKeyPublishable: '',
            justDonated: false
        }
        
        this.donateNow = this.donateNow.bind(this);
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

    handleDonationInput(event) {
        if (isNaN(+event.target.value / 3)) {
            alert('Sorry, that is not a valid number. Please enter a numerical donation.')
        }
        this.setState({
            donationAmount: +event.target.value
        });
    }

    donateNow() {
        this.setState({
            justDonated: true
        })
        setTimeout(() => {
            this.resetForm();
        }, 5000);
        
    }

    resetForm(){
        TweenMax.to($('.makeDonation'), 1.2, {display: 'none', opacity: '0', scale: '0.01', ease: TweenMax.Power1.easeInOut});
        $('input').val('');
        $('.donationInput').val('');
        this.setState({
            justDonated: false,
            donationAmount: ''
        });
    }
    

    render() {
        return (<main className="supportPage">
                    <div className="supportPageHeaderContainer">
                        <img src={supportMobileSVG} alt="Ballet Salt Lake City support" className="mobileHeader"/>
                        <img src={supportFullscreenSVG} alt="Ballet Salt Lake City support" className="fullscreenHeader"/>
                    </div>
                    <section className="supportPageContainer">
                        <div className="supportPageOuter">
                            <p>Your gift ensures that Ballet Salt Lake City continues to perform a repertory of thrilling works that is unparalleled the world over.</p>
                            <form>
                                <div>
                                    <input className="nameInput" placeholder="Name" onChange={(e) => this.handleNameInput(e)}></input>
                                    <input className="emailInput" placeholder="Email" onChange={(e) => this.handleEmailInput(e)}></input>
                                </div>
                                <div>
                                    $<input className="donationInput" placeholder="Gift" onChange={(e) => this.handleDonationInput(e)}></input>
                                    <button onClick={() => {
                                            TweenMax.to($('.makeDonation'), 1.2, {display: 'flex', opacity: '1', scale: '1', ease: TweenMax.Power1.easeInOut});
                                            alert(`THIS IS A CLASS PROJECT SITE. This ballet company does not actually exist, and any 'checkout' procedures from here on use Stripe in test mode. Use Stripe's test credit card, 4242 4242 4242 4242, with any future date as expiration and any 3 numbers as the CVC. No actual charge will be made, but please do not use your real credit card! ** Also, you will not recieve an email at your given address.`);
                                        }} type='button' disabled={this.state.donationAmount === 0 || this.state.donationAmount.length === 0 ? true : false} style={{backgroundColor: this.state.donationAmount === 0 || this.state.donationAmount.length === 0 ? '#606060': 'rgba(152, 135, 143, 0.85)'}}>Donate</button>
                                </div>
                            </form>
                        </div>
                    </section>
                    <div className="makeDonation">
                        <section>
                            <div className="stripeDonate">
                                <p>{this.state.justDonated ? `Thank you${this.state.nameEntry.length > 0 ? ', ' + this.state.nameEntry +', ' : ' '}for your generous gift of $${this.state.donationAmount} to Ballet SLC.` : `Make your donation of 
                                                                                                                        $${this.state.donationAmount} today.`}</p>
                                <div style={{display: this.state.justDonated ? 'none' : 'block'}}><Checkout className="checkoutStripe"
                                    name={'Donation'}
                                    description={'Ballet SLC'}
                                    amount={this.state.donationAmount}
                                    stripeKeyPublishable={this.state.stripeKeyPublishable}
                                    checkoutNow={this.donateNow}/></div>
                                <button onClick={() => this.resetForm()}>Return to Page</button>
                            </div>
                        </section>
                    </div>
                </main>);
    }
}
