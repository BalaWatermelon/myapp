var modelQuery=require('./todoquerydb.js');
var dataset={message:'test'}

modelQuery.QueryGet(dataset,function(res){  
	console.log(res);  
});