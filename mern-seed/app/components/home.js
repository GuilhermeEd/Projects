import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { action } from '../actions';

class Home extends Component {

    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stateFromRootStore: state.root }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return { action }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));