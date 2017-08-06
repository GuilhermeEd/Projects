const INITIAL_STATE = {
    nome: '',
    email: '',
    password: '',
    passwordconfirmation: '',
    msg: '',
    fail: false,
    success: false,
    loading: false
}

const authReducer =  (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOADING':
            return {...state, loading: true};
        case 'UPDATE_FIELD':
            return { ...state, [action.field.name]: action.field.value};
        case 'SIGNUP_FAIL':
            return { ...state, msg: action.msg, fail: true, success: false, loading: false};
        case 'SIGNUP_SUCCESS':
            return { ...state, msg: action.msg, fail: false, success: true, loading: false};
        default:
            return { ...state };
    }
}

export default authReducer;