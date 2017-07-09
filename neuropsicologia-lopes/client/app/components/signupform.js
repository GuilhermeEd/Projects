import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { handleChange, handleSubmit } from '../actions';

class SignUpForm extends Component {

    render() {
        const { handleChange, handleSubmit, name, surname, email, password, message } = this.props;
        return (
            <div>
                <form onSubmit={
                        e => {
                            e.preventDefault();
                            handleSubmit(name, surname, email, password);
                            return false;
                        }
                    }>

                    <div className="form-group">

                        <label htmlFor="name"><span style={{color:'red'}} >* </span>Nome</label>
                        <input className="form-control" name="name" id="name" type="text" placeholder="Nome" onChange={e => handleChange(e.target.name, e.target.value)} required/>
                        
                        <label htmlFor="surname">Sobrenome</label>
                        <input className="form-control" name="surname" id="surname" type="text" placeholder="Sobrenome" onChange={e => handleChange(e.target.name, e.target.value)}/>
                        
                   </div>

                   <div className="form-group">

                        <label htmlFor="email"><span style={{color:'red'}}>* </span>E-mail</label>
                        <input className="form-control" name="email" id="email" type="email" placeholder="seu@email.com" onChange={e => handleChange(e.target.name, e.target.value)} required/>

                        <label htmlFor="password"><span style={{color:'red'}}>* </span>Senha</label>
                        <input className="form-control" name="password" id="password" type="password" placeholder="senha" onChange={e => handleChange(e.target.name, e.target.value)} required/>
                        
                    </div>

                    <button className="btn btn-default" type="submit">Registrar</button>
                    
                    <span name="message" style={{color:'red'}}>{message}</span>

                </form>

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const {name, surname, email, password, message} = state.signup;
    return { name, surname, email, password, message }
}

export default withRouter(connect(mapStateToProps, { handleChange, handleSubmit })(SignUpForm));