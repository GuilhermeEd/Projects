import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Toast extends Component {

    render() {

        const { success, fail, msg, show } = this.props;

        const toastStyle = {
            position: 'absolute',
            top: '15px',
        };

        return(
            show ?
            <div style={toastStyle}>
                <div className={success ? "alert alert-success" : ""}>
                    <span>{success ? msg : ""}</span>
                </div>
                <div className={fail ? "alert alert-danger" : ""}>
                    <span>{fail ? msg : ""}</span>
                </div>
            </div>
            : <div></div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Toast));