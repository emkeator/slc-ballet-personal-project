import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import TweenLite from './../../libs/greensock_minified/TweenLite.min';
import $ from 'jquery';
import mistyCopelandOverlay from './../../images/mistyCopelandTopImg_colorScheme.png';
import mistyCopeland from './../../images/mistyCopeland_colorScheme.png';


class Season extends Component {
    render() {
        return (<main>
                    <section>
                        <p>
                            Valar morghulis. Valar morghulis. Skoriot nuhyz zaldrizesse ilzi? Sikudi nopazmi! Skoros morghot vestri? Skorī demalyti tymptir tymis, erinis ia morghulis. Valor dohaeris. Daoruni gimi, Ionos Sonaro. Ao ynoma diniluks? Toli rhuqo lotinti, kostilus. Vilibazmosa iderenni emilun. Tubi daor. Bantis zobrie issa se ossyngnoti ledys. Nuhor lir gurenna. Valor dohaeris. Valar morghulis. Valar morghulis.
                        </p>
                    </section>
                    <div className="headerContainer">
                        <img src={mistyCopeland} className="imageUnder"/>
                        <h1>Season</h1>
                        <img src={mistyCopelandOverlay} className="imageOver"/>
                    </div>
                    <section className="contact">
                        <h2>contact</h2>
                        <span>801-555-5555</span>
                        <span>inqueries@slcb.org</span>
                        <span>973 S Temple, SLC</span>
                    </section>

                </main>);
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, {})(Season);