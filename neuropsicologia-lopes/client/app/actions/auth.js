export const updateField = (field) => {
    return (dispatch) => {
        dispatch({ type: 'UPDATE_FIELD', field });
    }
}

export const login = (email, password) => {
    return (dispatch) => {

        const req = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        };

        fetch('/api/login', req)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

        dispatch({ type: 'LOGIN' });
    }
}

export const signup = (username, email, password, passwordconfirmation) => {
    return (dispatch) => {
        console.log(username);
        if( !(password == passwordconfirmation) ){
            return dispatch({ type: 'SIGNUP_FAIL', msg: 'Senhas não conferem'});
        }

        const req = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email, password})
        };

        fetch('/api/signup', req)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

        dispatch({ type: 'SIGNUP' });
    }
}