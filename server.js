const express = require("express");
const app = express();

let lessons = [
    { 'topic': 'math', 'location': 'London', 'price': 100 },
    { 'topic': 'math', 'location': 'Liverpool', 'price': 80 },
    { 'topic': 'math', 'location': 'Oxford', 'price': 90 },
    { 'topic': 'math', 'location': 'Bristol', 'price': 120 },
];

let user = { 'email': 'user@email.com', 'password': 'mypassword' };

app.use(express.static('public'));

app.get("/lessons", function (request, response) {
    response.json(lessons);
});

app.get("/user", function (request, response) {
    response.json(user);
});

app.use(function (request, response) {
    response.status(404).send("Page not found!");
});

app.listen(3000);