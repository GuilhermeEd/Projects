export const updateField = (field) => {
    return (dispatch) => {
        dispatch({ type: 'UPDATE_FIELD', field });
    }
}

export const dismiss = () => {
    return (dispatch) => {
        dispatch({type: 'DISMISS_MODAL'});
    }
}

export const present = () => {
    return (dispatch) => {
        dispatch({type: 'PRESENT_MODAL'});
    }
}

export const newEvent = (title, client, time, desc) => {
    return (dispatch) => {

        dispatch({type: 'LOADING'});

        console.log(title);
        console.log(client);
        console.log(time);
        console.log(desc);
    }
}