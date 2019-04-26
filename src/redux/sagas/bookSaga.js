import { take, put, takeLatest }  from "redux-saga/effects";
import  { 

    getBooks, 
    saveBook, 
    deleteBook
} from "../../api/booksApi";

import {
    GET_BOOKS,    
    getBooksSuccess,   
} from "../actions";

 function* loadBooks() {    
    console.log("######### loading Books")
    const response = yield getBooks();
    console.log(response);   
    yield put(getBooksSuccess(response));
}

// watcher saga
export function* loadBooksSaga() {
    yield takeLatest(GET_BOOKS, loadBooks);
}