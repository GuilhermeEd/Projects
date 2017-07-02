const INITIAL_STATE = {

}

export const defaultReducer = (state=INITIAL_STATE, action) => {
    
    switch(action.type){
        
        case('ACTION'):
            return { ...state , ...action[payload] };

        default:
            return { ...state };
    }
}