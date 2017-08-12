import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Calendar from '../common/calendar';

class UserPage extends Component{

render(){
    return (
        <div>
            <Calendar/>
        </div>
    );
};

}

const mapStateToProps = (state, ownProps) => ({
    
});

const mapDisatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDisatchToProps)(UserPage);