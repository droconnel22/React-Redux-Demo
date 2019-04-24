import * as types from "../actions/actionTypes";
import defaultState from "../defaultState";

export default function authorReducer(state=defaultState.authors, action){
    switch(action.type){      
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            return state;
    }
}