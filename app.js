const http = require('http');
const express = require('express');
const fs = require('fs');
const path = require('path');

var app = express();
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'));

app.get('/', function(req, res){
    res.render('index',{status:"Press Button"});
})

app.post('/desk/up', function(req, res){
    console.log('Lifting the table');
    return res.render('index', {status: "Desk went up"});
})

app.post('/desk/down', function(req, res){
    console.log('Lowering the table');
    return res.render('index', {status: "Desk went down"});
})

app.listen(3000, function () {
    console.log('Server started on Port: 3000!')
})