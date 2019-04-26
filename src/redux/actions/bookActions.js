import { makeActionCreator } from '../utility';


export const GET_BOOKS = "GET_BOOKS";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILURE = "GET_BOOKS_FAILURE";

export const getBooks = makeActionCreator(GET_BOOKS);

export const getBooksSuccess = makeActionCreator(GET_BOOKS_SUCCESS,"books");

export const getBooksFailure = makeActionCreator(GET_BOOKS_FAILURE, "error");