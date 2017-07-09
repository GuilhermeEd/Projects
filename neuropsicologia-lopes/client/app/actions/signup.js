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
        .then( res => {
            if(res.status == 201){
                return res.json();
            }
            if (res.status == 400) {
                dispatch({ type: 'SUBMIT', message: 'Usuário já existe'})
            }
        })
        .then( data => {
            dispatch({ type: 'SUBMIT', message: 'Usuário Registrado!'})
            })
        .catch(err => {
            console.log(err);
            dispatch({ type: 'SUBMIT', message: 'Solicitação falhou. Tente novamente.'})
        });
    }    
}