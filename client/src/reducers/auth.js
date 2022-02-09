import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    //chekcing whether loading is done
    loading: true,
    user: null,
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return  {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        //if register is failed need to remove anything in the storage, BOTH do same operation
            localStorage.removeItem('token');
            return  {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state;
    }
}