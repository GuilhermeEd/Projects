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

        fetch('/login', req)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

        dispatch({ type: 'LOGIN' });
    }
}