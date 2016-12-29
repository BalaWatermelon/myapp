var mongodata=require('./monlistdata.js');
var express=require("express");
var app=express();

//set view engine
app.set("view engine","jade")
//set view directory
app.set("views","MyViews")

mongodata.personList(function(recordset){
	//console.log(recordset);
	app.get('/',function(req,res){
	res.render('personTp', { personList:recordset });
   });

});

var server=app.listen(3000,function(){
	console.log('Server is running!');
});