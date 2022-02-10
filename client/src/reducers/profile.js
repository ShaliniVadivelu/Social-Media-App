import { GET_PROFILE, PROFILE_ERROR } from "../actions/types";

const initialState = {
    //it will get all our profile and also others profile if we visit their page
    profile: null,
    // it is for profile listing page
    profiles: [],
    repos: [],
    loading: true,
    error: {}
}

export default function(state= initialState,action) {
    const {type, payload} =action;

    switch(type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            };
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}