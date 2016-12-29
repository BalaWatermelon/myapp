var express = require('express');
var app = express();
var dataset=require('./recordset.js');
//set view engine
app.set("view engine","jade")
//set view directory
app.set("views","MyViews")

// Create a router to handle routes for a set of RestAPI
var RestAPI = express.Router();

// CREATE (/restful/todo)
RestAPI.post('/todo', function(req, res) {
    // ...
});

// READ ALL & FORM (/restful/todo)
RestAPI.get('/todo',function(req,res){
   
   res.render('restfulTP',{ itemlist:dataset });
});

// READ (/restful/todo/:id)
RestAPI.get('/todo/:id', function(req, res) {
    // ...
});

// UPDATE ((/restful/todo/:id))
RestAPI.put('/todo/:id', function(req, res) {
    // ...
    console.log(req.params.id);
});

// DELETE (/restful/todo/:id)
RestAPI.delete('/todo/:id', function(req, res) {
    // ...
});


// Apply this router on (/restful)
app.use('/restful', RestAPI);
app.use('/restful',express.static(__dirname+'/public'));

app.listen(3000,function(){
	console.log('Ready...for 3000');
});