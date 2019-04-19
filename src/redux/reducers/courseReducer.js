import * as types from "../actions/actionTypes";
import initialState from "./initalState";

export default function courseReducer(state=initialState.courses, action){
    switch(action.type){
        case types.CREATE_COURSE:
            return [...state, {...action.course}];
        case types.LOAD_COURSE_SUCCESS:
            return action.courses;       
        default:
            return state;
    }
}