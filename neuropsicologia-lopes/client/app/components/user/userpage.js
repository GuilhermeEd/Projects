import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Calendar from '../common/calendar';

class UserPage extends Component{

    constructor(){
        super();
        this.state = ({
            date: '',
            events: ['ev1','ev2','ev3','...']
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
                                        events={[]}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-9">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">
                                        <h2 className="text-center">{this.state.date ? this.formatDate(this.state.date) : 'Selecione um dia'}</h2>
                                    </div>
                                </div>
                                <div className="card-body">
                                    {
                                        this.state.events.map(ev=>{
                                            return <li key={ev}>{ev}</li>
                                        })
                                    }
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

});

export default connect(mapStateToProps, mapDisatchToProps)(UserPage);