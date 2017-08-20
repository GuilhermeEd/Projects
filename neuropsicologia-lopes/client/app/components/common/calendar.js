import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './calendar.css';

const hoje = new Date();

class Calendar extends Component{

    constructor(){
        super();
        this.state = {
            calendar: [
                {
                    mes: 'JAN',
                    dias: 31
                },
                {
                    mes: 'FEV',
                    dias: hoje.getFullYear % 6 ? 28 : 29
                },
                {
                    mes: 'MAR',
                    dias: 31
                },
                {
                    mes: 'ABR',
                    dias: 30
                },
                {
                    mes: 'MAI',
                    dias: 31
                },
                {
                    mes: 'JUN',
                    dias: 30
                },
                {
                    mes: 'JUL',
                    dias: 31
                },
                {
                    mes: 'AGO',
                    dias: 31
                },
                {
                    mes: 'SET',
                    dias: 30
                },
                {
                    mes: 'OUT',
                    dias: 31
                },
                {
                    mes: 'NOV',
                    dias: 30
                },
                {
                    mes: 'DEZ',
                    dias: 31
                }
            ],
            date: hoje,
            days: []
        }
    }
    
    componentWillMount(){
        this.setState({days: this.getDays(hoje.getMonth()+1, hoje.getFullYear())});
    }

    getDays(month, fullyear){
        const diaComecoMes = new Date([month , 1, fullyear]).getDay();
        const diaFimMesPassado = this.state.calendar[month-2].dias;
        const diaFimMes = this.state.calendar[month-1].dias;
        let arr = [];
        for(let i = 0 ; i < diaComecoMes ; i++) arr.unshift(diaFimMesPassado - i);
        for(let i = 1 ; i <= diaFimMes ; i++) arr.push(i);
        for(let i = 1 ; i <= (42 - diaComecoMes - diaFimMes) ; i++) arr.push(i);
        return arr;
    }

    selectDay(day){
        console.log(day);
    }

    render(){

        return (
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
                                <td key={i+'a'}>
                                    <button
                                    style={day > 7 ? {color: '#bbb'} : {} }
                                    className="date-button"
                                    onClick={e=>this.selectDay(e.target.innerHTML)}>
                                        {day <= 9 ? `0${day}` : day}
                                    </button>
                                </td>
                            )
                        })}
                    </tr>
                    <tr>
                        {this.state.days.slice(7,14).map((day,i)=>{
                            return(
                                <td key={i+'b'}>
                                    <button
                                    className="date-button"
                                    onClick={e=>this.selectDay(e.target.innerHTML)}>
                                        {day <= 9 ? `0${day}` : day}
                                    </button>
                                </td>
                            )
                        })}
                    </tr>
                    <tr>
                        {this.state.days.slice(14,21).map((day,i)=>{
                            return(
                                <td key={i+'a'}>
                                    <button
                                    className="date-button"
                                    onClick={e=>this.selectDay(e.target.innerHTML)}>
                                        {day}
                                    </button>
                                </td>
                            )
                        })}
                    </tr>
                    <tr>
                        {this.state.days.slice(21,28).map((day,i)=>{
                            return(
                                <td key={i+'a'}>
                                    <button
                                    className="date-button"
                                    onClick={e=>this.selectDay(e.target.innerHTML)}>
                                        {day}
                                    </button>
                                </td>
                            )
                        })}
                    </tr>
                    <tr>
                        {this.state.days.slice(28,35).map((day,i)=>{
                            return(
                                <td key={i+'a'}>
                                    <button
                                    style={day <= 14 ? {color: '#bbb'} : {} }
                                    className="date-button"
                                    onClick={e=>this.selectDay(e.target.innerHTML)}>
                                        {(day >= 1 && day <=9)  ? `0${day}` : day}
                                    </button>
                                </td>
                            )
                        })}
                    </tr>
                    <tr>
                        {this.state.days.slice(35,42).map((day,i)=>{
                            return(
                                <td key={i+'a'}>
                                    <button
                                    style={day <= 14 ? {color: '#bbb'} : {} }
                                    className="date-button"
                                    onClick={e=>this.selectDay(e.target.innerHTML)}>
                                        {(day >= 1 && day <=9)  ? `0${day}` : day}
                                    </button>
                                </td>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        );
    };

}

const mapStateToProps = (state, ownProps) => ({
    
});

const mapDisatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDisatchToProps)(Calendar);