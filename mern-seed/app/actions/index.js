export function createAction(param){
    return dispatch => {
        return { type: 'ACTION', payload: param }
    }
}