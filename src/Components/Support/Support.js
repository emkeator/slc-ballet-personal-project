import React, {Component} from 'react'
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import {loadDancers} from './../../ducks/reducer';
import {url} from './../../ducks/apiGetter';
// import TweenLite from './../../libs/greensock_minified/TweenLite.min';
import $ from 'jquery';
import axios from 'axios';
import supportMobileSVG from './../../images/support.svg';
import supportFullscreenSVG from './../../images/supportFullscreen.svg';

class Support extends Component {
    constructor() {
        super();
        
        this.state = {
            emailEntry: '',
            nameEntry: '',
            donationAmount: ''
        }
    }

    componentWillMount() {
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

    donate() {
        alert(`Thank you for your generous donation of $${this.state.donationAmount} to Ballet Salt Lake City! However, ${this.state.nameEntry}, this is only the minimum viable product of a class site. Upon completion, clicking 'Donate' will create a Stripe object, and you would be able to donate (however, since it will still be a class project, Stripe will remain permanently in test mode).`);
        $('.thanks').show();
        $('input').val('');
        $('.donationInput').val('');
        setTimeout(() => {
            $('.thanks').hide();
        }, 5000);
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
                                    <button onClick={() => this.donate()} type='button' style={{backgroundColor: this.state.donationAmount === 0 ? '#606060': 'rgba(152, 135, 143, 0.85)'}}>Donate</button>
                                </div>
                                <p className="thanks">Thank you for your generous donation of ${this.state.donationAmount} to Ballet Salt Lake City.</p>
                                {/*ADD STRIPE!!!!!!!  */}
                            </form>
                        </div>
                    </section>
                    
                    

                </main>);
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {})(Support);