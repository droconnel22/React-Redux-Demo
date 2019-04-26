import { makeActionCreator } from '../utility';

export const GET_AUTHORS = "GET_AUTHORS";

export const GET_AUTHORS_SUCCESS ='GET_AUTHORS_SUCCESS';

export const GET_AUTHORS_FAILURE = 'GET_AUTHORS_FAILURE';

export const getAuthors = makeActionCreator(GET_AUTHORS);

export const getAuthorsSuccess = makeActionCreator(GET_AUTHORS_SUCCESS,"authors");

export const getAuthorsFailure = makeActionCreator(GET_AUTHORS_FAILURE, "error");
