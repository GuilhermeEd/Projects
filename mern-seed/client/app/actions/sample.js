export const action = (params) => {
    return (dispatch) => {
        // do stuff
        dispatch({ type: 'ACTION', payload: params });
    }
}