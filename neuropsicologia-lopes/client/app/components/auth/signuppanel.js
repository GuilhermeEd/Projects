import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateField, signup } from '../../actions';
import './signuppanel.css';
import ReactLoading from 'react-loading';

class SignUpPanel extends Component {

    render() {

        const {
            firstName,
            lastName,
            email,
            password,
            passwordconfirmation,
            updateField,
            signup,
            msg,
            fail,
            success,
            loading
        } = this.props;

        return (
            <div className="col-sm-4 col-sm-offset-4 signup-bannerWrapper">
                <div className="panel panel-default signup-banner">
                    <div className="panel-body">
                        <div className="panel-heading">
                            <div className="panel-title">
                                <h2>Registrar</h2>
                                <div className={ fail ? "alert alert-danger" : ""}><span>{ fail ? msg : ""}</span></div>
                                <div className={ success ? "alert alert-success" : ""}><span>{ success ? msg : ""}</span></div>
                            </div>
                        </div>
                        <form onSubmit={e=> signup(e)}>
                            <div className="form-group">
                                <label htmlFor="firstName"><span style={{color:'red'}}>* </span>Nome</label>
                                <input name="firstName" type="text" className="form-control" id="firstName" placeholder="Nome"
                                onChange={e=>updateField(e.target)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Sobrenome</label>
                                <input name="lastName" type="text" className="form-control" id="lastName" placeholder="Sobrenome"
                                onChange={e=>updateField(e.target)}/>
                            </div>
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
                                <label htmlFor="passwordconfirmation"><span style={{color:'red'}}>* </span>Confirmar Senha</label>
                                <input name="passwordconfirmation" type="password" className="form-control" id="passwordconfirmation" placeholder="Senha"
                                onChange={e=>updateField(e.target)}/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-default"
                                disabled={!(firstName && email && password && passwordconfirmation) || loading}>{
                                    loading ? <ReactLoading type="bubbles" color="#444" height="20px" width="58px" className="signup-loading"/> : "Registrar"
                                }</button>
                                <span style={{color: 'red', float: 'right', fontSize: 'small'}}>* Campos Obrigatórios</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    email: state.auth.email,
    password: state.auth.password,
    passwordconfirmation: state.auth.passwordconfirmation,
    msg: state.auth.msg,
    fail: state.auth.fail,
    success: state.auth.success,
    loading: state.auth.loading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateField: (e) => dispatch(updateField(e)),
    signup: (e) => {
        e.preventDefault();
        dispatch(signup(firstName.value, lastName.value, email.value, password.value, passwordconfirmation.value));
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpPanel));