import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateField, login } from '../../actions';
import './loginpanel.css';

class LoginPanel extends Component {

    log(){
        console.log(this.props);
    }

    render() {

        const {email, password, updateField, login} = this.props;

        return (
            <div className="col-sm-4 col-sm-offset-4 bannerWrapper">
                <div className="panel panel-default banner">
                    <div className="panel-body">
                        <div className="panel-heading">
                            <div className="panel-title">
                                <h2>Login</h2>
                            </div>
                        </div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input name="email" type="email" className="form-control" id="email" placeholder="Email"
                                onChange={e=>updateField(e.target)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Senha</label>
                                <input name="password" type="password" className="form-control" id="password" placeholder="Senha"
                                onChange={e=>updateField(e.target)}/>
                            </div>
                            <button type="button" className="btn btn-default"
                            onClick={login}
                            disabled={!(email && password)}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    email: state.auth.email,
    password: state.auth.password
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateField: (e) => dispatch(updateField(e)),
    login: () => dispatch(login(email.value, password.value))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPanel));