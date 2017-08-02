import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './signuppage.css';
import SignUpPanel from './signuppanel.js';

class SignUpPage extends Component {

    render() {
        return (
            <header>
                    <SignUpPanel/>
            </header>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({ state })

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpPage));