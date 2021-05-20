const { request } = require("express");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());


app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get('/calculator/multiply', function (req, res) {
    const values = Object.values(req.query).flat()
    const multiply = values.reduce((acc, val) => (acc) * (val))
    res.send(` ${multiply}`)
});


app.get('/calculator/subtract', function (req, res) {
    const values = Object.values(req.query).flat()
    const subtract = values.reduce((acc, val) => Number(acc - Number(val)))
    res.send(` ${subtract}`)


    app.get('/calculator/add', function (req, res) {
        const values = Object.values(req.query).flat()
        const addition = values.reduce((acc, val) => (Number(acc) + Number(val)))
        res.send(` ${addition}`)


        app.get('/calculator/divide', function (req, res) {
            const values = Object.values(req.query).flat()
            const divide = values.reduce((acc, val) => (Number(acc) / Number(val)))
            res.send(` ${divide}`)
        });


        app.post('/calculator/multiply', function (req, res) {
            const values = Object.values(req.body).flat()
            const multiply = values.reduce((acc, val) => (acc) * (val))
            res.send(` ${multiply}`)
        });


        app.post('/calculator/subtract', function (req, res) {
            const values = Object.values(req.body).flat()
            const subtract = values.reduce((acc, val) => (acc) - (val))
            res.send(` ${subtract}`)
        });

        app.post('/calculator/add', function (req, res) {
            const values = Object.values(req.body).flat()
            const addition = values.reduce((acc, val) => (Number(acc) + Number(val)))
            res.send(` ${addition}`)
        });

        app.post('/calculator/divide', function (req, res) {
            const values = Object.values(req.body).flat()
            const divide = values.reduce((acc, val) => (Number(acc) / Number(val)))
            res.send(` ${divide}`)
        });




        app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
