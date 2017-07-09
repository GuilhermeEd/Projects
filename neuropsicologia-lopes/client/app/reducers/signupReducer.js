const INITIAL_STATE = {
    name: '',
    surname: '',
    email: '',
    password: '',
    message: ''
}

const signupReducer =  (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'HANDLE_CHANGE':
            return { ...state, [action.field]: action.val };
        case 'SUBMIT':
            return { ...state, message: action.message };
        default:
            return { ...state };
    }
}

export default signupReducer;