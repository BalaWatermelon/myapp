var modelUpdate=require('./todoupdatedb.js');
var dataset={id:1,message:'寫中'}

modelUpdate.UpdateSave(dataset,function(res){ 
	console.log(res);  
});