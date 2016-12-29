var express = require('express');
var app = express();
var bodyParser = require( 'body-parser' );

// Create a router to handle routes for a set of RestAPI
var RestAPI = express.Router();

// CREATE (/restful/todo)
RestAPI.post('/todo', function(req, res) {
    // ...
});

// READ ALL & FORM (/restful/todo)
RestAPI.get('/todo',function(req,res){
    // ...
});

// READ (/restful/todo/:id)
RestAPI.get('/todo/:id', function(req, res) {
    // ...
});

// UPDATE ((/restful/todo/:id))
RestAPI.put('/todo/:id', function(req, res) {
    // ...
});

// DELETE (/restful/todo/:id)
RestAPI.delete('/todo/:id', function(req, res) {
    // ...
});


app.listen(3000,function(){
	console.log('Ready...for 3000');
});