import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const calendario = {
    jan: {

    },
    fev: {

    }
}

const hoje = new Date();

class Calendar extends Component{

render(){
    return (
        <div className="col-xs-4 col-xs-offset-4">
            <div className="panel panel-default">
                <div className="panel-heading text-center">Mês</div>
                <div className="panel-body">
                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead>
                                <tr>
                                    <th className="text-center">Dom</th>
                                    <th className="text-center">Seg</th>
                                    <th className="text-center">Ter</th>
                                    <th className="text-center">Qua</th>
                                    <th className="text-center">Qui</th>
                                    <th className="text-center">Sex</th>
                                    <th className="text-center">Sáb</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>02</td>
                                    <td>03</td>
                                    <td>04</td>
                                    <td>05</td>
                                    <td>06</td>
                                    <td>07</td>
                                </tr>
                                <tr>
                                    <td>08</td>
                                    <td>09</td>
                                    <td>10</td>
                                    <td>11</td>
                                    <td>12</td>
                                    <td>13</td>
                                    <td>14</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>16</td>
                                    <td>17</td>
                                    <td>18</td>
                                    <td>19</td>
                                    <td>20</td>
                                    <td>21</td>
                                </tr>
                                <tr>
                                    <td>22</td>
                                    <td>23</td>
                                    <td>24</td>
                                    <td>25</td>
                                    <td>26</td>
                                    <td>27</td>
                                    <td>28</td>
                                </tr>
                                <tr>
                                    <td>29</td>
                                    <td>30</td>
                                    <td>31</td>
                                    <td>01</td>
                                    <td>02</td>
                                    <td>03</td>
                                    <td>04</td>
                                </tr>
                                <tr>
                                    <td>05</td>
                                    <td>06</td>
                                    <td>07</td>
                                    <td>08</td>
                                    <td>09</td>
                                    <td>10</td>
                                    <td>11</td>
                                </tr>
                            </tbody>
                        </table>
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

export default connect(mapStateToProps, mapDisatchToProps)(Calendar);