import defaultState from "../defaultState";

import {    
    GET_AUTHORS_FAILURE,
    GET_AUTHORS_SUCCESS,

} from "../actions"

export default function authorReducer(state=defaultState.authors, action){
    switch(action.type){    
        case GET_AUTHORS_SUCCESS:        
            return action.authors;
        case GET_AUTHORS_FAILURE:
            return state;           
        default:
            return state;
    }
}