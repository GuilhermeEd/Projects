export const updateField = (field) => {
    return (dispatch) => {
        dispatch({ type: 'UPDATE_FIELD', field });
    }
}

export const auth = (token) => {
    return (dispatch) => {

        const req = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        };

        fetch('/api/auth', req)
        .then(res => res.json())
        .then(data => console.log(data));

    }
}

export const login = (email, password, history) => {
    return (dispatch) => {

        const req = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        };

        dispatch({type: 'LOADING'});

        fetch('/api/login', req)
        .then(res => res.json())
        .then(data => {
            if(!data.ok){ throw Error(data.msg); }
            localStorage.setItem("token", data.token);
            history.push('/');
            dispatch({ type: 'LOGIN_SUCCESS', msg: data.msg});
        })
        .catch(err => {
            let msg;
            (err.message == "Failed to fetch") ? (msg = "Falha ao enviar solicitação") : (msg = err.message);
            dispatch({ type: 'LOGIN_FAIL', msg});
        });
    }
}

export const signup = (firstName, lastName, email, password, passwordconfirmation) => {
    return (dispatch) => {
        if( !(password == passwordconfirmation) ){
            return dispatch({ type: 'SIGNUP_FAIL', msg: 'Senhas não conferem'});
        }

        const req = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstName, lastName, email, password})
        };

        dispatch({type: 'LOADING'});

        fetch('/api/signup', req)
        .then(res => res.json())
        .then(data => {
            if(!data.ok){ throw Error(data.msg); }
            dispatch({ type: 'SIGNUP_SUCCESS', msg: data.msg});
        })
        .catch(err => {
            let msg;
            (err.message == "Failed to fetch") ? (msg = "Falha ao enviar solicitação") : (msg = err.message);
            dispatch({ type: 'SIGNUP_FAIL', msg});
        });
    }
}