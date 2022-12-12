const express = require('express');
const { google } = require('googleapis');

const app = express();

// Add the below to fix CORS error
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
    console.log("This is a successful test")

    res.send({
        "title" : 1,
        "number" : 2
    })
})

app.listen(3000, () => console.log("This is working."))