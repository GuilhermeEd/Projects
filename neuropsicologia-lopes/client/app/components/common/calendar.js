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
        <div></div>
    );
};

}

const mapStateToProps = (state, ownProps) => ({
    
});

const mapDisatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDisatchToProps)(Calendar);