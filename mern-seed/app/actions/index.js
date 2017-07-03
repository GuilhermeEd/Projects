export default class Actions {

    static action(args){
        return dispatch => {
            dispatch({type: 'ACTION', payload: args});
        }
    }

}