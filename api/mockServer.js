


const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));

const middlewares = jsonServer.defaults();

server.use(middlewares);


server.use(jsonServer.bodyParser);


// simulate delay on all request
server.use(function(req, res, next) {
    setTimeout(next, 2000);
});

server.post("/courses/", function(req, res, next) {
    let course = req.body;
    const error = validateCourse(course);
    if(error){
        res.status(400).send(error);
    } else {
        course.slug = createSlug(course.title);
        next();
    }
});

server.use(router);

const port = 3009;
server.listen(port, () => {
    console.log(`JSON server is running on port ${port}`);
});


function createSlug(value) {
    return value
        .replace(/[^a-z0-9_]+/gi,"-")
        .replace(/^-|-$/g, "")
        .toLowerCase();
}

function validateCourse(course) {
    if(!course.title) return "Title is required";
    if(!course.authorId) return "Author is required";
    if(!course.category) return "Category is requried";
    return null;
}