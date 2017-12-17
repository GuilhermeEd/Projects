import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './calendar.css';

class Calendar extends Component{

    constructor(){
        super();
        this.state = {
            calendar: [
                {mes: 'JAN',dias: 31},
                {mes: 'FEV',dias: new Date().getFullYear % 6 ? 28 : 29},
                {mes: 'MAR',dias: 31},
                {mes: 'ABR',dias: 30},
                {mes: 'MAI',dias: 31},
                {mes: 'JUN',dias: 30},
                {mes: 'JUL',dias: 31},
                {mes: 'AGO',dias: 31},
                {mes: 'SET',dias: 30},
                {mes: 'OUT',dias: 31},
                {mes: 'NOV',dias: 30},
                {mes: 'DEZ',dias: 31}
            ],
            days: [],
            month: 0,
            year: 0,
            events: []
        }
    }
    
    componentWillMount(){
        const today = new Date();
        const month = today.getMonth()+1;
        const year = today.getFullYear();
        let events = [];
        if(this.props.events){
            events = this.props.events.filter(date=>date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear());
            events = events.map(date=>date.getDate());
        }
        this.setState({events,month,year,days: this.getDays(month, year)});
    }

    getDays(month, fullyear){
        const diaSemanaComecoMes = new Date([month , 1, fullyear]).getDay();
        if (month >= 2) {var diasMesPassado = this.state.calendar[month-2].dias;}
        else {var diasMesPassado = this.state.calendar[11].dias;}
        var diaFimMes = this.state.calendar[month-1].dias;
        let arr = [];
        for(let i = 0 ; i < diaSemanaComecoMes ; i++) arr.unshift(diasMesPassado - i);
        for(let i = 1 ; i <= diaFimMes ; i++) arr.push(i);
        for(let i = 1 ; i <= (42 - diaSemanaComecoMes - diaFimMes) ; i++) arr.push(i);
        return arr;
    }

    selectDay(day, row){
        if(row == 1 && day > 7){
            let month = this.state.month == 1 ? 12 : this.state.month - 1;
            let year = this.state.month == 1 ? this.state.year - 1 : this.state.year;
            document.querySelector('#dia').innerHTML = day + "/" + (month<=9 ? "0"+month : month) + "/" + year;
            this.props.onPickDate(new Date([month, day, year]));
        } else if(row >= 5 && day <= 14){
            let month = this.state.month == 12 ? 1 : this.state.month + 1;
            let year = this.state.month == 12 ? this.state.year + 1 : this.state.year;
            document.querySelector('#dia').innerHTML = day + "/" + (month<=9 ? "0"+month : month) + "/" + year;
            this.props.onPickDate(new Date([month, day, year]));
        } else {
            document.querySelector('#dia').innerHTML = day + "/" + (this.state.month<=9 ? "0"+this.state.month : this.state.month) + "/" + this.state.year;
            this.props.onPickDate(new Date([this.state.month, day, this.state.year]));
        }
    }

    prevMonth(){
        let prevMonth, events;
        if(this.state.month == 1) {
            prevMonth = 12;
            let prevYear = this.state.year - 1;
            if(this.props.events){
                events = this.props.events.filter(ev=>{
                    const date = new Date(ev.date);
                    date.getMonth() == prevMonth-1 && date.getFullYear() == prevYear
                });
                events = events.map(date=>date.getDate());
            }
            this.setState({
                events,
                month: prevMonth,
                year: prevYear,
                days: this.getDays(prevMonth,prevYear)
            });
        } else {
            prevMonth = this.state.month - 1;
            if(this.props.events){
                events = this.props.events.filter(ev=>{
                    const date = new Date(ev.date);
                    date.getMonth() == prevMonth-1 && date.getFullYear() == this.state.year
                });
                events = events.map(date=>date.getDate());
            }
            this.setState({
                events,
                month: prevMonth,
                days: this.getDays(prevMonth,this.state.year)
            });
        }
    }

    nextMonth(){
        let nextMonth, events;
        if(this.state.month == 12) {
            nextMonth = 1;
            let nextYear = this.state.year + 1;
            if(this.props.events){
                events = this.props.events.filter(ev=>{
                    const date = new Date(ev.date);
                    date.getMonth() == nextMonth-1 && date.getFullYear() == nextYear
                });
                events = events.map(date=>date.getDate());

            }
            this.setState({
                events,
                month: nextMonth,
                year: nextYear,
                days: this.getDays(nextMonth,nextYear)
            });
        } else {
            nextMonth = this.state.month + 1;
            if(this.props.events){
                events = this.props.events.filter(ev=>{
                    const date = new Date(ev.date);
                    date.getMonth() == nextMonth-1 && date.getFullYear() == this.state.year
                });
                events = events.map(date=>date.getDate());
            }
            this.setState({
                events,
                month: nextMonth,
                days: this.getDays(nextMonth,this.state.year)
            });
        }
    }

    render(){
        return (
            <div>
                <div className="row" style={{flexWrap: 'nowrap'}}>
                    <div className="col text-left"><button className="date-button" onClick={()=>this.prevMonth()}><i className="fa fa-arrow-left" aria-hidden="true"></i></button></div>
                    <div className="col-md-auto text-center"><h4>{this.state.calendar[this.state.month-1].mes} / {this.state.year}</h4></div>
                    <div className="col text-right"><button className="date-button" onClick={()=>this.nextMonth()}><i className="fa fa-arrow-right" aria-hidden="true"></i></button></div>
                </div>
                <div className="row">
                    <div className="col text-center"><h6 id="dia">Selecione um dia</h6></div>
                </div>
                <div>
                    <table className="table">
                        <thead className="text-center">
                            <tr>
                                <th className="text-center">D</th>
                                <th className="text-center">S</th>
                                <th className="text-center">T</th>
                                <th className="text-center">Q</th>
                                <th className="text-center">Q</th>
                                <th className="text-center">S</th>
                                <th className="text-center">S</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                {this.state.days.slice(0,7).map((day,i)=>{
                                    return(
                                        <td key={i+'a'} style={(day>7) ? {backgroundColor: 'rgba(0,0,0,.03)'} : (
                                                this.state.events.includes(day) ? {backgroundColor: '#fff'} : {}
                                            )}>
                                            <button
                                            style={(day>7) ? {color: '#999'} : {}}
                                            className="date-button"
                                            onClick={e=>this.selectDay(e.target.innerHTML, 1)}>
                                                {day <= 9 ? `0${day}` : day}
                                            </button>
                                        </td>
                                    )
                                })}
                            </tr>
                            <tr>
                                {this.state.days.slice(7,14).map((day,i)=>{
                                    return(
                                        <td key={i+'b'} style={this.state.events.includes(day) ? {backgroundColor: '#aee'} : {}}>
                                            <button
                                            className="date-button"
                                            onClick={e=>this.selectDay(e.target.innerHTML, 2)}>
                                                {day <= 9 ? `0${day}` : day}
                                            </button>
                                        </td>
                                    )
                                })}
                            </tr>
                            <tr>
                                {this.state.days.slice(14,21).map((day,i)=>{
                                    return(
                                        <td key={i+'a'} style={this.state.events.includes(day) ? {backgroundColor: '#aee'} : {}}>
                                            <button
                                            className="date-button"
                                            onClick={e=>this.selectDay(e.target.innerHTML, 3)}>
                                                {day}
                                            </button>
                                        </td>
                                    )
                                })}
                            </tr>
                            <tr>
                                {this.state.days.slice(21,28).map((day,i)=>{
                                    return(
                                        <td key={i+'a'} style={this.state.events.includes(day) ? {backgroundColor: '#aee'} : {}}>
                                            <button
                                            className="date-button"
                                            onClick={e=>this.selectDay(e.target.innerHTML, 4)}>
                                                {day}
                                            </button>
                                        </td>
                                    )
                                })}
                            </tr>
                            <tr>
                                {this.state.days.slice(28,35).map((day,i)=>{
                                    return(
                                        <td key={i+'a'} style={(day<=14) ? {backgroundColor: 'rgba(0,0,0,.03)'} : (
                                            this.state.events.includes(day) ? {backgroundColor: '#aee'} : {}
                                        )}>
                                            <button
                                            style={day <= 14 ? {color: '#999'} : {} }
                                            className="date-button"
                                            onClick={e=>this.selectDay(e.target.innerHTML, 5)}>
                                                {(day >= 1 && day <=9)  ? `0${day}` : day}
                                            </button>
                                        </td>
                                    )
                                })}
                            </tr>
                            <tr>
                                {this.state.days.slice(35,42).map((day,i)=>{
                                    return(
                                        <td key={i+'a'} style={(day<=14) ? {backgroundColor: 'rgba(0,0,0,.03)'} : (
                                            this.state.events.includes(day) ? {backgroundColor: '#aee'} : {}
                                            )}>
                                            <button
                                            style={day <= 14 ? {color: '#999'} : {} }
                                            className="date-button"
                                            onClick={e=>this.selectDay(e.target.innerHTML, 6)}>
                                                {(day >= 1 && day <=9)  ? `0${day}` : day}
                                            </button>
                                        </td>
                                    )
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

}

const mapStateToProps = (state, ownProps) => ({
    
});

const mapDisatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDisatchToProps)(Calendar);