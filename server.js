var express=require('express');
var app=express();
app.get('/',function(req,res){
	res.send('<html><body><h1>Hello world!</h1></body></html>');
});

app.post('/submit-data',function(req,res){
	res.send('Post request');
});

app.put('/update-data',function(req,res){
	res.send('Put Request');
});

app.delete('/delete-data',function(req,res){
	res.send('DELETE Request');
});

var server=app.listen(5050,function(){
	console.log('Node server is running!');
});