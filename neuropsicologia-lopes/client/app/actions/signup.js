export const handleChange = (field, val) => {
    return { type: 'HANDLE_CHANGE', field, val}
}

export const handleSubmit = (name, surname, email, password) => {
    return dispatch => {

        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        const config = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({name, surname, email, password})
        };

        fetch("/signup", config)
        .then(dispatch({ type: 'SUBMIT', message: 'Usuário Registrado!'}))
        .catch(err => {
        console.log(err.status);
        dispatch({ type: 'SUBMIT', message: 'Já existe um usuário com este e-mail!'};
        });
    }    
}