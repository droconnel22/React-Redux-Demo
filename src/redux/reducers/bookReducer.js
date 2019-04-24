import defaultState from "../defaultState";

import {    
    GET_BOOKS_FAILURE,
    GET_BOOKS_SUCCESS
} from '../actions'


export default function bookReducer(state=defaultState.books, {type, books}){
    switch(type){
        case GET_BOOKS_SUCCESS:
            return [...state, ...books];
        case GET_BOOKS_FAILURE:
            return state.books;       
        default:
            return state;
    }
}