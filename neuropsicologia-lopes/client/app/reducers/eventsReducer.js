const INITIAL_STATE = {
    active: false,
    title: '',
    client: '',
    time: '',
    desc: '',
    msg: '',
    fail: false,
    success: false,
    loading: false,
}

const eventsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOADING':
            return {...state, loading: true };
        case 'UPDATE_FIELD':
            return { ...state, [action.field.name]: action.field.value };
        case 'DISMISS_MODAL':
            return { ...state, loading: false, active: false };
        case 'PRESENT_MODAL':
            return { ...state, loading: false, active: true };
        case 'EVENT_CREATE_SUCCESS':
            return { ...state, loading: false, success: true, fail: false, msg: action.msg };
        case 'EVENT_CREATE_FAIL':
            return { ...state, loading: false, success: false, fail: true, msg: action.msg };
        case 'EVENTS_GET_SUCCESS':
            return { ...state, loading: false, success: true, fail: false, msg: action.msg };
        case 'EVENTS_GET_FAIL':
            return { ...state, loading: false, success: false, fail: true, msg: action.msg };
        default:
            return { ...state };
    }
}

export default eventsReducer;