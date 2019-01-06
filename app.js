const http = require('http');
const express = require('express');
const fs = require('fs');

var app = express();

app.set('view engine', 'jade');
app.engine('jade', require('jade').__express); 
 
app.get('/deskcontrol', function(req, res) {
    res.sendFile('./deskcontrol.html', {root: __dirname })
});

var port = process.env.PORT || 3000;
var server = app.listen(port);
console.log('Express app started');