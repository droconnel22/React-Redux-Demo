import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3009" + "/books/";


// FETCH IS BUILT INTO MODERN BROWSERS
export function getBooks(){
    return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveBook(book) {
    return fetch ( baseUrl + (book.id || ""),
    {
        method: book.id ? "PUT" : "POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(book)
    })    
        .then(handleResponse)
        .then(handleError);
};

export function deleteBook(bookId) {
    return fetch(baseUrl + bookId, { method: "DELETE"})
    .then(handleResponse)
    .catch(handleError);
}