var mongodata=require('./monlistdata.js');
var msdata=require('./mslistdata.js');

var express=require("express");
var app=express();

//set view engine
app.set("view engine","jade")
//set view directory
app.set("views","MyViews")

app.get('/person',function(req,res){
	 mongodata.personList(function(recordset){
	//console.log(recordset);
	res.render('personPageTP', { personList:recordset });
  });	
});

app.get('/student',function(req,res){
	msdata.stuList(function(recordset){
	//console.log(recordset);
	res.render('studentPageTP', { studentList:recordset });
  });	
});


var server=app.listen(3000,function(){
	console.log('Server is running!');
});