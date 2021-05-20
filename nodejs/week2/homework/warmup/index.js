const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

//creating numbers page
app.get('/numbers', function (request, response) {
    response.send("This is the numbers page");
});


//creating 
app.get('/numbers/add', function (request, response) {
    const first = parseInt(request.query.first)
    const second = parseInt(request.query.second)
    let sum = first + second
    response.send(`Adding ${first} to ${second} is equal to ${sum}`);
});

app.get('/numbers/multiply/:third/:forth', function (request, response) {
    const third = parseInt(request.params.third)
    const forth = parseInt(request.params.forth)
    let multiply = third * forth
    response.send(`Multiplication of ${third} and ${forth} is equal to ${multiply}`);
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
