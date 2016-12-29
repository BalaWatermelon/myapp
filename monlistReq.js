var mongodata=require('./monlistdata.js');

mongodata.personList(function(res){
	console.log(res);
});
