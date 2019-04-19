
import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi"

export function createCourse(course) {
    // action and payload
    // action creator
    return { type:types.CREATE_COURSE, course: course}
}


function loadCourseSuccess(courses) {
    return { type: types.LOAD_COURSE_SUCCESS, courses};
}

export function loadCourses() {
    return function(dispatch) {
        return courseApi
        .getCourses()
        .then(courses => {
            dispatch(loadCourseSuccess(courses));
        })
        .catch(error => {
            throw error;
        })
    }
}