import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import { auth } from '../actions/auth';
import ReactLoading from 'react-loading';
import UserPage from './user/userpage';

class Home extends Component {

    componentDidMount(){
        this.props.auth(localStorage.getItem("token"), this.props.history);
    }

    render() {

        const styles = {
            offset : {
                top: "50%",
                transform: "translateY(-50%)"
            },
            loading: {
                float: "none",
                margin: "0 auto"
            }
        };

        const {loading} = this.props;

        return (
                loading ?
                    <div className="col-sm-12 col-md-8 col-lg-4 mx-auto" style={styles.offset}>
                        <ReactLoading type="bubbles" color="#444" style={styles.loading}/>
                    </div>
                : <Redirect to="/userpage"/>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    loading: state.auth.loading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    auth: (token, history) => dispatch(auth(token, history))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));