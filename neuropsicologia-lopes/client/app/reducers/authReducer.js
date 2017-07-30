const INITIAL_STATE = {
    email: '',
    password: ''
}

const authReducer =  (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'UPDATE_FIELD':
            return { ...state, [action.field.name]: action.field.value };
        default:
            return { ...state };
    }
}

export default authReducer;