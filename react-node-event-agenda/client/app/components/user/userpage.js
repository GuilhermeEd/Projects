import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Calendar from '../common/calendar';
import './userpage.css';
import Event from '../event/event';
import NewEventModal from '../event/neweventmodal';
import { newEvent, getEvents } from '../../actions/events';

class UserPage extends Component{

    constructor(props){
        super(props);
        this.state = ({
            date: new Date()
        });
    }

    formatDate(date){
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        if (day < 10) day = "0" + day;
        if (month < 10) month = "0" + month;
        return `${day}/${month}/${year}`;
    }

    formatISODate(date){
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        if (day < 10) day = "0" + day;
        if (month < 10) month = "0" + month;
        return `${year}-${month}-${day}`;
    }

    onPickDate(date){
        this.setState({date});
    }

    onEventClick(ev){
        console.log(ev);
    }

    newEvent(title, client, time, desc){
        this.props.newEvent(title, client, time, desc, this.state.date, this.updateEvents.bind(this));
    }

    componentWillMount(){
        this.updateEvents();
    }

    updateEvents(){
        this.props.getEvents();
    }

    renderEvents(){
        const events = 
        this.props.events
        .filter( ev => {
            return ev.date.substring(0,10) == this.formatISODate(this.state.date);
        })
        .map(ev => {
        return  <Event
                key={ev.time}
                title={ev.title}
                client={ev.client}
                time={ev.time}
                desc={ev.desc}
                onEventClick={()=>this.onEventClick(ev)}/>
        });

        return events.length == 0 ? 'Nenhum evento para esse dia...' : events;
    }

    render(){
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div name="Calendar" className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">
                                        <h2 className="text-center">Calendário</h2>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <Calendar
                                        onPickDate={(date)=>this.onPickDate(date)}
                                        events={this.props.events}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-9">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">
                                        <h2 style={{float: 'left', display: 'inline-block'}}>{this.state.date ? this.formatDate(this.state.date) : 'Selecione um dia'}</h2>
                                        <NewEventModal newEvent={(title, client, time, desc)=>this.newEvent(title, client, time, desc)}/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        { this.renderEvents() }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

}

const mapStateToProps = (state, ownProps) => ({
    events: state.events.events
});

const mapDisatchToProps = (dispatch, ownProps) => ({
    presentNewEventModal: () => dispatch(present()),
    newEvent: (title, client, time, desc, date, cb) => dispatch(newEvent(title, client, time, desc, date, cb)),
    getEvents: () => dispatch(getEvents())
});

export default connect(mapStateToProps, mapDisatchToProps)(UserPage);