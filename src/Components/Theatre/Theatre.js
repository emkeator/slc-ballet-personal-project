import React, {Component} from 'react'
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Theatre extends Component {

    render() {
        return (<main>
                    

                </main>);
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {})(Theatre);