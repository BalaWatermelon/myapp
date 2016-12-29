var express=require('express');
var app=express();

//set view engine
app.set("view engine","jade")
//set view directory
app.set("views","MyViews")

app.get('/',function(req,res){
	var sql=require('mssql');
	//config for your database
	var config={
		user:'sa',
		password:'ookjkasdfe',
		server:'localhost\\SQLEXPRESS',
		database:'SchoolDB'
	};
    //connect to your database
    sql.connect(config,function (err) {    	
    	if(err) console.log(err);
    	//create Request object
    	var request=new sql.Request();
    	request.query('select * from Student',function(err,recordset){
    		if(err) 
                console.log(err);
            else
    		  res.render('stuTp',{studentList:recordset});
    	});
    });

});

var server=app.listen(3000,function(){
	console.log('Server is running!');
});