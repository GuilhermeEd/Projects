import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './loginpage.css';
import LoginForm from './loginform.js';

class LoginPage extends Component {

    render() {

        const {fail, success, msg} = this.props;

        return (
            <header>
                <div className="col-sm-12 col-md-8 col-lg-4 login-bannerWrapper mx-auto">
                    <div className="card login-banner">
                        <div className="card-header">
                            <div className="card-title">
                                <h2>Login</h2>
                                <div className={ fail ? "alert alert-danger" : ""}><span>{ fail ? msg : ""}</span></div>
                                <div className={ success ? "alert alert-success" : ""}><span>{ success ? msg : ""}</span></div>
                            </div>
                        </div>
                        <div className="card-body">
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    fail: state.auth.fail,
    success: state.auth.success,
    msg: state.auth.msg
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));