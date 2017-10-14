import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Calendar from '../common/calendar';
import './userpage.css';
import Event from '../event/event.js';
import NewEventModal from '../event/neweventmodal.js';

class UserPage extends Component{

    constructor(){
        super();
        this.state = ({
            date: '',
            events: []
        });
    }

    formatDate(date){
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getYear();
        if (day < 10) day = "0" + day;
        if (month < 10) month = "0" + month;
        return `${day}/${month}/${year}`;
    }

    onPickDate(date){
        this.setState({date});
        
    }

    onEventClick(ev){
        console.log(ev);
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
                                        events={this.state.events}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-9">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">
                                        <h2 style={{float: 'left', display: 'inline-block'}}>{this.state.date ? this.formatDate(this.state.date) : 'Selecione um dia'}</h2>
                                        <NewEventModal/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        {
                                            this.state.events ? 'Nenhum evento para esse dia...' : this.state.events.map((ev,i)=>{
                                            return <Event
                                                    key={i}
                                                    title={ev.title}
                                                    client={ev.client}
                                                    time={ev.time}
                                                    desc={ev.desc}
                                                    onEventClick={()=>this.onEventClick(ev)}/>
                                            })
                                        }
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
    
});

const mapDisatchToProps = (dispatch, ownProps) => ({
    presentNewEventModal: () => dispatch(present())
});

export default connect(mapStateToProps, mapDisatchToProps)(UserPage);