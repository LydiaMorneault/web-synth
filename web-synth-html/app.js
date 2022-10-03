const express = require('express');
//import express from 'express';
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;


app.use(express.static(__dirname + '/'));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log("Server started at //localhost:" + port);