import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { action } from '../actions';

class LoginPage extends Component {

    render() {
        return (
            <header>
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="panel-heading">
                                    <div className="panel-title">
                                        <h2>Login</h2>
                                    </div>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Senha</label>
                                        <input type="password" className="form-control" id="password" placeholder="Senha"/>
                                    </div>
                                    <button type="submit" className="btn btn-default">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stateFromRootStore: state.root }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return { action }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));