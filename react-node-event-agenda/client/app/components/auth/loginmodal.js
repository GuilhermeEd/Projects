import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import LoginPage from './loginpage';
import { sessionExpired } from '../../actions/auth';

class LoginModal extends Component {

	styles = {
		modal: {
			top: '0',
			left: '0',
			width: '100%',
			height: '100%',
			backgroundColor: 'rgba(0,0,0,0.4)',
			position: 'fixed',
			overflow: 'auto',
			zIndex: "2",
		},
		modalContent: {
			top: "50%",
			transform: "translateY(-50%)"
		}
	};

  render() {
    return (
			<div style={this.styles.modal}>
				<div
            className="col-sm-10 col-md-6 col-lg-2 mx-auto"
            style={this.styles.modalContent}
            onClick={e => e.stopPropagation()}
          >
            <div className="card login-banner">
              <div className="card-header">
                <div className="card-title">
                  <div style={{textAlign: 'center'}}>
                    <h4>
											Sua sessão expirou :(
                    </h4>
                  </div>
                </div>
              </div>
              <div className="card-body">
							 <Link onClick={()=>this.props.sessionExpired()} to="/login"  className="btn btn-primary" style={{width: '100%'}}>Login</Link>
              </div>
            </div>
          </div>
			</div>
		);
  }
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
	sessionExpired: () => dispatch(sessionExpired())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginModal));