import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateField, login } from '../../actions';
import './loginpanel.css';
import ReactLoading from 'react-loading';

class LoginPanel extends Component {

    render() {

        const {email, password, updateField, login, msg, fail, success, loading} = this.props;

        return (
            <div className="col-sm-4 col-sm-offset-4 login-bannerWrapper">
                <div className="panel panel-default login-banner">
                    <div className="panel-body">
                        <div className="panel-heading">
                            <div className="panel-title">
                                <h2>Login</h2>
                                <div className={ fail ? "alert alert-danger" : ""}><span>{ fail ? msg : ""}</span></div>
                                <div className={ success ? "alert alert-success" : ""}><span>{ success ? msg : ""}</span></div>
                            </div>
                        </div>
                        <form onSubmit={e=> login(e)}>
                            <div className="form-group">
                                <label htmlFor="email"><span style={{color:'red'}}>* </span>Email</label>
                                <input name="email" type="email" className="form-control" id="email" placeholder="Email"
                                onChange={e=>updateField(e.target)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><span style={{color:'red'}}>* </span>Senha</label>
                                <input name="password" type="password" className="form-control" id="password" placeholder="Senha"
                                onChange={e=>updateField(e.target)}/>
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-default"
                                    disabled={!(email && password)}>
                                    {loading ? <ReactLoading type="bubbles" color="#444" height="20px" width="35px" className="login-loading"/> : "Login"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    email: state.auth.email,
    password: state.auth.password,
    login: state.auth.login,
    msg: state.auth.msg,
    fail: state.auth.fail,
    success: state.auth.success,
    loading: state.auth.loading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateField: (e) => dispatch(updateField(e)),
    login: (e) => {
        e.preventDefault();
        dispatch(login(email.value, password.value));
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPanel));