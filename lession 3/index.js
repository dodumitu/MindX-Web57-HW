const express = require("express");

const random = require("./random");

const even = require("./even");

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(9000, err => {
    if (err) {
        return console.log(err);
    }
})

app.get("/course", (req, res) => {
    res.send({ "course": "web57" });
})

app.get("/course/random", (req, res) => {
    res.send(random());
})

app.get("/even", (req, res) => {
    const start = parseInt(req.query['from']);
    const end = parseInt(req.query['to']);
    res.send({ "numbers": even(start, end) })
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/auth/login", (req,res)=>{
    console.log(req.body);
    res.send(loginCheck(req.body));
})



