const courses = [
    {
        id: 1,
        title:"Securing React APps with Auth0",
        slug: "react-auth0-authentication-security",
        authorId:1,
        category:"javascript"
    },
    {
        id: 2,
        title:"React: The Big Picture",
        slug: "react-big-picture",
        authorId:1,
        category:"javascript"
    },
    {
        id: 3,
        title:"Creating Reusable React Components",
        slug: "create-resuable",
        authorId:1,
        category:"javascript"
    },
    {
        id: 4,
        title:"Building a JavaScript Development Environment",
        slug: "building-javascript-dev-env",
        authorId:1,
        category:"javascript"
    },
];


const authors = [
    {id:1, name:"Cory House"},
    {id:2, name:"Scot Allen"},
    {id:3, name:"Dan Wahlin"}
];

const newCourse = {
    id:null,
    title:"",
    authorId:null,
    category:""
};

module.exports = {
    newCourse,
    courses,
    authors
};