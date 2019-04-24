import { take, put }  from "redux-saga/effects";
import  { 
    getBooks, 
    saveBook, 
    deleteBook
} from "../../api/booksApi";

import {
    GET_BOOKS,    
    getBooksSuccess,   
} from "../actions";


export function* loadBooks() {  
    yield take(GET_BOOKS);
    console.log("######### loading Books")
    const response = yield getBooks();
    console.log(response);    
    console.log("books data:", response);
    yield put(getBooksSuccess(response));
}

