const INITIAL_STATE = {
    nome: '',
    email: '',
    password: '',
    passwordconfirmation: '',
    msg: ''
}

const authReducer =  (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'UPDATE_FIELD':
            return { ...state, [action.field.name]: action.field.value };
        case 'SIGNUP_FAIL':
            return { ...state, msg: action.msg};
        case 'SIGNUP':
            return { ...state, msg: ''}
        default:
            return { ...state };
    }
}

export default authReducer;