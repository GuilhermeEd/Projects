import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateField, login } from '../../actions';
import './loginform.css';
import ReactLoading from 'react-loading';

class LoginForm extends Component {

    render() {

        const {email, password, updateField, login, loading} = this.props;

        return (
            <form onSubmit={e=> login(e, this.props.history)}>
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
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    email: state.auth.email,
    password: state.auth.password,
    login: state.auth.login,
    loading: state.auth.loading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateField: (e) => dispatch(updateField(e)),
    login: (e, history) => {
        e.preventDefault();
        dispatch(login(email.value, password.value, history));
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));