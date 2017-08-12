import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class UserPage extends Component{
    render(){
        return(
            <h1>User Page!</h1>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    
});

const mapDisatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDisatchToProps)(UserPage);