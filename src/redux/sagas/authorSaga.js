import {takeLatest, put}  from "redux-saga/effects";

import {
    getAuthors
} from "../../api";

import {
    GET_AUTHORS, 
    getAuthorsSuccess,
    getAuthorsFailure
    
} from "../actions";


 function* loadAuthors() {    
    console.log("######### loading Authors")
    const response = yield getAuthors();
    console.log(response);   
    if(!response){
        yield put(getAuthorsFailure(response));
    }
    yield put(getAuthorsSuccess(response));
}

// watcher saga
export function* loadAuthorsSaga() {
    yield takeLatest(GET_AUTHORS, loadAuthors);
}