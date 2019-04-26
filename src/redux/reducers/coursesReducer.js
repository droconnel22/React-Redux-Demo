import defaultState from "../defaultState";
import {          
    UPDATE_COURSE_SUCCESS,
    CREATE_COURSE,
    LOAD_COURSE_SUCCESS,
} from "../actions";

export default function coursesReducer(state=defaultState.courses, action){
    switch(action.type){
        case CREATE_COURSE:
            return [...state, {...action.course}];
        case UPDATE_COURSE_SUCCESS:
             console.log("UPDATE_COURSE_SUCCESS Reducer", state, action)
            return state.map(course => 
                course.id === action.course.id ? action.course : course
            );
        case LOAD_COURSE_SUCCESS:
            return action.courses;       
        default:
            return state;
    }
}