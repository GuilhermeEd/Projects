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
            return {...state, loading: false, active: false};
        case 'PRESENT_MODAL':
            return {...state, loading: false, active: true};
        default:
            return { ...state };
    }
}

export default eventsReducer;