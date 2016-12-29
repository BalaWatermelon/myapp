var modelRemove=require('./todoremovedb.js');
var dataset={id:3}

modelRemove.RemoveSave(dataset,function(res){  
	console.log(res);  
});