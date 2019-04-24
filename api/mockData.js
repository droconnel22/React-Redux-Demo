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

const books = [
    {
        id: 1,
        title:"Moby Dick",       
        authorId:5,
        category:"fiction"
    },
    {
        id: 2,
        title:"The Republic",
        slug: "react-big-picture",
        authorId:4,
        category:"non-fiction"
    },
    {
        id: 3,
        title:"The Odyessy",
        slug: "dont-stare-at-the",
        authorId:6,
        category:"fiction"
    },
    {
        id: 4,
        title:"Resturant At the End Of the Universe",
        slug: "please-eat-the-cow",
        authorId:7,
        category:"non-sense"
    },
];


const authors = [
    {id:1, name:"Cory House"},
    {id:2, name:"Scot Allen"},
    {id:3, name:"Dan Wahlin"},
    {id:4, name:"Plato"},
    {id:5, name:"Charles Dickens"},
    {id:6, name:"Homer"},
    {id:7, name:"Dougals Adams"},
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
    authors,
    books
};