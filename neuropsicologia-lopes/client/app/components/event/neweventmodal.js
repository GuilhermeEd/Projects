import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { updateField, dismiss, present, newEvent } from "../../actions/events";
import "./neweventmodal.css";
import ReactLoading from "react-loading";
import { auth } from '../../actions/auth';
import LoginPage from '../auth/loginpage';
import LoginModal from '../auth/loginmodal';
class NewEventModal extends Component {

	componentDidMount(){
		this.props.auth(localStorage.getItem("token"), this.props.history);
	}

  render() {
    const {
      active,
      title,
      client,
      time,
      desc,
      loading,
      fail,
      success,
      msg,
      dismiss,
      present,
      updateField,
			newEvent,
			date
    } = this.props;
		
    const styles = {
      modal: {
        display: active ? "block" : "none",
        zIndex: "1",
        position: "fixed",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        overflow: "auto",
        backgroundColor: "rgba(0,0,0,0.4)"
      },
      modalContent: {
        top: "50%",
        transform: "translateY(-50%)"
      }
    };
    
    return (
      <div style={date=="" ? {display: 'none'} : {}}>
				<div style={msg == 'Autenticação falhou' ? {} : {display:'none'}}>
					<LoginModal/>
				</div>
        <button
          onClick={() => present()}
          className="btn btn-primary"
          style={{ cursor: "pointer", display: "inline-block", float: "right" }}
        >
          Novo Evento
        </button>
        <div style={styles.modal} onClick={() => dismiss()}>
          <div
            className="col-sm-12 col-md-8 col-lg-4 mx-auto"
            style={styles.modalContent}
            onClick={e => e.stopPropagation()}
          >
            <div className="card login-banner">
              <div className="card-header">
                <div className="card-title">
                  <div>
                    <h2 style={{ float: "left", display: "inline-block" }}>
                      Novo Evento
                    </h2>
                    <button
                      onClick={() => dismiss()}
                      className="btn btn-secondary"
                      style={{
                        cursor: "pointer",
                        float: "right",
                        display: "inline-block"
                      }}
                    >
                      <i className="fa fa-times" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className={fail ? "alert alert-danger" : ""}>
                  <span>{fail ? msg : ""}</span>
                </div>
                <div className={success ? "alert alert-success" : ""}>
                  <span>{success ? msg : ""}</span>
                </div>
                <form onSubmit={e => newEvent(e)}>
                  <div className="form-group">
                    <label htmlFor="title">
                      <span style={{ color: "red" }}>* </span>Título
                    </label>
                    <input
                      name="title"
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Título"
                      onChange={e => updateField(e.target)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="client">Paciente</label>
                    <input
                      name="client"
                      type="text"
                      className="form-control"
                      id="client"
                      placeholder="Paciente"
                      onChange={e => updateField(e.target)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Horário</label>
                    <input
                      name="time"
                      type="time"
                      className="form-control"
                      id="time"
                      onChange={e => updateField(e.target)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="desc">Descrição</label>
                    <textarea
                      name="desc"
                      rows="3"
                      className="form-control"
                      id="desc"
                      placeholder="Descrição do Evento"
                      onChange={e => updateField(e.target)}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-default"
                      disabled={!title}
                      style={{ cursor: "pointer" }}
                    >
                      {loading ? (
                        <ReactLoading
                          type="bubbles"
                          color="#444"
                          height="20px"
                          width="35px"
                          className="new-event-loading"
                        />
                      ) : (
                        "Novo Evento"
                      )}
                    </button>
                    <span
                      style={{
                        color: "red",
                        float: "right",
                        fontSize: "small"
                      }}
                    >
                      * Campos Obrigatórios
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  active: state.events.active,
  title: state.events.title,
  client: state.events.client,
  time: state.events.time,
  desc: state.events.desc,
  loading: state.events.loading,
  fail: state.events.fail,
  success: state.events.success,
  msg: state.events.msg
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	updateField: e => dispatch(updateField(e)),
	auth: (token, history) => dispatch(auth(token, history)),
  dismiss: () => dispatch(dismiss()),
  present: () => dispatch(present()),
  newEvent: e => {
    e.preventDefault();
    dispatch(newEvent(ownProps.date, title.value, client.value, time.value, desc.value));
	}
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewEventModal)
);
