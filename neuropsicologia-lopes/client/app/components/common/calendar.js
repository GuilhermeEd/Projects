import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const hoje = new Date();

class Calendar extends Component{

    constructor(){
        super();
        this.state = {
            data: hoje,
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
            ]
        }
    }
    
    firstRow(){
        const diaComecoMes = new Date([
            this.state.data.getMonth()+1 , 1,
            this.state.data.getFullYear()
        ]).getDay();
        const fimMesPassado = this.state.calendar[this.state.data.getMonth()].dias;
        let arr = [];
        for(let i = 0 ; i < diaComecoMes ; i++){
            arr.push(fimMesPassado - (diaComecoMes - i - 1));
        }
        return arr;
    }

    render(){
        return (
            <table className="table table-inverse">
                <thead>
                    <tr>
                        <th>D</th>
                        <th>S</th>
                        <th>T</th>
                        <th>Q</th>
                        <th>Q</th>
                        <th>S</th>
                        <th>S</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            this.firstRow().map(function(dia, i){
                                return <td key={parseInt(dia.toString() + i.toString())}>{dia}</td>;
                            })
                        }
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