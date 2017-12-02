import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './event.css';

class Event extends Component{
    render(){
        return (
            <li className="list-group-item event-container" onClick={()=>this.props.onEventClick()}>
                <div className="row">
                    <div className="col-sm-12"><h5 className="event-title">{this.props.title}</h5></div>
                    <div className="col-auto"><p className="event-client">{this.props.client}</p></div>
                    <div className="col-auto"><i className="fa fa-clock-o event-time" aria-hidden="true">{this.props.time}</i></div>
                    <div className="col-sm-12"><p className="event-desc text-justify">{this.props.desc}</p></div>
                </div>
            </li>
        );
    };
}

const mapStateToProps = (state, ownProps) => ({
    
});

const mapDisatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDisatchToProps)(Event);