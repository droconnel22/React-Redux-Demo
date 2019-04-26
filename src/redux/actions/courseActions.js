
import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { makeActionCreator } from '../utility';



export const UPDATE_COURSE ="UPDATE_COURSE";
export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";
export const UPDATE_COURSE_FAILURE ="UPDATE_COURSE_FAILURE";


export const updateCourse = makeActionCreator(UPDATE_COURSE, "course","history");

export const updateCourseSuccess = makeActionCreator(UPDATE_COURSE_SUCCESS,"course");

export const updateCourseFailure = makeActionCreator(UPDATE_COURSE_FAILURE, "error");

export const createCourse= makeActionCreator(types.CREATE_COURSE, "course");

export const loadCourseSuccess= makeActionCreator(types.LOAD_COURSE_SUCCESS, "courses");


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
};