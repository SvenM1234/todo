const express = require('express');
const path = require('path');
const routeTodo = require('./routes/routeTodo');
const bodyParser = require('body-parser');
const app = express();


// CORS
app.use((req, res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requst_With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods','Get, POST, PUT, DELETE, PATCH, OPTION');
    next();
});

app.use(express.static(__dirname + '/public/'));


// app.use(bodyParser.json());  // quand recu en json 
app.use(bodyParser.urlencoded({ extended: true })); // quand recu en post brut


app.use('/', routeTodo);


module.exports = app;