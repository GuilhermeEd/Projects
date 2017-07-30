import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { action } from '../../actions';
import './loginpage.css';
import LoginPanel from './loginpanel.js';

class LoginPage extends Component {

    render() {
        return (
            <header>
                    <LoginPanel/>
            </header>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { state }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return { action }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));