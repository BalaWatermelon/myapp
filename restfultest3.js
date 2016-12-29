var express = require('express');
var bodyParser = require( 'body-parser' );
var app = express();

// load mongodb-CURL
var modelCreate=require('./todocreatedb.js');
var modelUpdate=require('./todoupdatedb.js');
var modelRemove=require('./todoremovedb.js');
var modelQuery=require('./todoquerydb.js');

//var dataset=require('./recordset.js');  //資料集...方便測試View流程使用
//set view engine
app.set("view engine","jade")
//set view directory
app.set("views","MyViews")

// configure app to use bodyParser()
// this will let us get the data from Request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Create a router to handle routes for a set of RestAPI
var RestAPI = express.Router();

// middleware to use for all requests
RestAPI.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// READ ALL & FORM (/restful/todo)
RestAPI.get('/todo',function(req,res){
   //mongodb find all.....
   modelQuery.QueryGet({},function(record){
     if(req.xhr)
	     res.render('recordTP',{layout:false, itemlist:record}); 
	   else   	   
	     res.render('restfulTP',{itemlist:record});  
   });

});

// CREATE (/restful/todo)
RestAPI.post('/todo', function(req, res) {
    // ...
     var dataset=[{message:req.body.momsg}];
     //console.log(dataset);
     modelCreate.InsertNew(dataset,function(msg){  //res 是新增筆數
//	   res.send('Write '+msg+' records to collections!');  
     //res.send(body);
     return res.redirect('/restful/todo');
     });
     
     
    //res.send('you push a request to create');
});

// READ (/restful/todo/:id)
// 這邊要注意的：這裡的id是網址列後的搜尋字串
// 在用 req.params是根據路由給的參數名稱, 與req.body的不同處!
// 如果你怕會搞混, 請修改!
RestAPI.get('/todo/:id', function(req, res) {
    // mongodb find one or all...
     var dataset={message:req.params.id}
     modelQuery.QueryGet(dataset,function(record){ 
	  if(req.xhr)
	     res.render('recordTP',{layout:false, itemlist:record}); 
	   else
	     res.render('restfulTP',{itemlist:record}); 
     });
    //res.send('you push a request to read one');
});

// UPDATE ((/restful/todo/:id))
RestAPI.put('/todo/:id', function(req, res) {
    // ...
     var dataset={id:parseInt(req.params.id),message:req.body.momsg};
     modelUpdate.UpdateSave(dataset,function(record){ 
         	   
	     res.render('oneTP',{layout:false, 
	   	        oneid:record.id,onemsg:record.message});

     });
    //res.send('you push a request to put! ' + req.body.moid+req.body.momsg);
});

// DELETE (/restful/todo/:id)
RestAPI.delete('/todo/:id', function(req, res) {
    // ...
    var dataset={id:parseInt(req.params.id)}
    //console.log(dataset);
    modelRemove.RemoveSave(dataset,function(msg){  
	     res.send(msg); 
     });
});


// Apply this router on (/restful)
app.use('/restful', RestAPI);
app.use('/restful',express.static(__dirname+'/public'));

app.listen(3000,function(){
	console.log('Ready...for 3000');
});