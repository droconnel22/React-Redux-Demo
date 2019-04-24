const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const {courses, authors, books } = mockData;
const data = JSON.stringify({courses, authors,books});
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function(err) {
    err ? console.log(err) : console.log("Mock db created");
});