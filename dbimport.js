var datasets=require('./recordset.js');  //先載入原本的資料集, 建立mogodb資料庫
var modelCreate=require('./todofirstdb.js');         

modelCreate.InsertNew(datasets,function(res){  //res 是新增筆數	
	console.log(res);  
});