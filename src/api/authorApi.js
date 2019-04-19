import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3009" + "/authors/";


// FETCH IS BUILT INTO MODERN BROWSERS
export function getAuthors(){
    return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}