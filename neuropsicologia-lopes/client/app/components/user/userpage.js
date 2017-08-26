import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Calendar from '../common/calendar';

class UserPage extends Component{

render(){
    return (
        <div>
            <div className="col-sm-12 col-md-8 col-lg-4 mx-auto">
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">
                            <h2 className="text-center">Calendário</h2>
                        </div>
                    </div>
                    <div className="card-body">
                        <Calendar/>
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