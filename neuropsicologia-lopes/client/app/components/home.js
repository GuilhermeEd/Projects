import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { auth } from '../actions';

class Home extends Component {

    render() {
        return (
            <div>
                <h1>Home</h1>
                <script>
                    window.onload = () => {
                        this.props.auth(localStorage.getItem("token"))
                        };
                </script>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    auth: (token) => dispatch(auth(token))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));