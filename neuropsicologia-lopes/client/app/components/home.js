import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { auth } from '../actions';
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
                    <div className="col-xs-4 col-xs-offset-4" style={styles.offset}>
                        <ReactLoading type="bubbles" color="#444" style={styles.loading}/>
                    </div>
                : <UserPage/>
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