import { take, put, takeLatest }  from "redux-saga/effects";
import  { 
    saveCourse as postCourse
} from "../../api";

import {
    UPDATE_COURSE,   
    updateCourseSuccess,
    updateCourseFailure
} from "../actions/courseActions";


 function* saveCourse({course:requestCourse,history}) {  
     try {
        const course = yield postCourse(requestCourse);   
        yield put(updateCourseSuccess(course));
     } catch (error) {
         console.log("saveCourse:error", error);
         yield put(updateCourseFailure(error));
     }

     history.push("/courses")
  
}

// watcher saga
export function* saveCourseSaga() {
    yield takeLatest(UPDATE_COURSE, saveCourse);
}