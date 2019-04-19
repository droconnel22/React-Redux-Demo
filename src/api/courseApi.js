import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3009" + "/courses/";


// FETCH IS BUILT INTO MODERN BROWSERS
export function getCourses(){
    return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveCourse(course) {
    return fetch ( baseUrl + (course.id || ""),
    {
        method: course.id ? "PUT" : "POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(course)
    })    
        .then(handleResponse)
        .then(handleError);
};

export function deleteCourse(courseId) {
    return fetch(baseUrl + courseId, { method: "DELETE"})
    .then(handleResponse)
    .catch(handleError);
}