const INITIAL_STATE = {

}

const rootReducer =  (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return { ...state };
    }
}

export default rootReducer;