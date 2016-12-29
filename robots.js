var express = require('express');
var app = express();
var bodyParser = require( 'body-parser' );

// configure app to use bodyParser()
// this will let us get the data from Request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Create a router to handle routes for a set of RestAPI
var RestAPI = express.Router();

// CREATE (/restful/robots)
RestAPI.post('/robots', function(req, res) {
  // ...
    res.json({ name: req.body.name , message: "我已經收到機器人名字:"+ req.body.name});
});

// READ ALL & FORM (/restful/robots)
RestAPI.get('/robots',function(req,res){
    // ...
    res.json({message:"你要的機器人列表!!"});

});

// READ (/restful/robots/:id)
RestAPI.get('/robots/:id', function(req, res) {
    // ...
    res.json({id:req.params.id, message:"我要了解機器人"+req.params.id+"號!"});
});

// UPDATE ((/restful/robots/:id))
RestAPI.put('/robots/:id', function(req, res) {
    // ...
    res.json({id:req.params.id, message:"我要改造機器人"+req.params.id+"號!"});

});

// DELETE (/restful/robots/:id)
RestAPI.delete('/robots/:id', function(req, res) {
    // ...
    res.json({id:req.params.id, message:"美江說,他要買"+req.params.id+"號-機器人"});
});

app.use('/restful',RestAPI);

app.listen(3000,function(){
	console.log('Ready...for 3000');
});