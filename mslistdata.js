var sql=require('mssql');
	//config for your database
var config={
		user:'sa',
		password:'liveinnow',
		server:'localhost\\SQLEXPRESS',
		database:'SchoolDB'
	};
	
module.exports.stuList=function(callback){
	  sql.connect(config,function (err) {    	
    	if(err) console.log(err);
    	//create Request object
    	var request=new sql.Request();
    	request.query('select * from Student',function(err,recordset){
    		if(err) 
                console.log(err);
            callback(recordset);	
    	});
    });
}