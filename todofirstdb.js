var MongoClient=require('mongodb').MongoClient;

module.exports.InsertNew=function(data,callback){
	MongoClient.connect("mongodb://localhost:27017/tododb",function(err,db){
		if(err) throw err;
        //Write databse Insert/Update/Query code here..

		db.collection("Todolist",function(err,collection){			
		    if(err) throw err;		                        
            //把資料集加入mongodb, 可以是一筆或多筆
	        collection.insertMany(data, function(err, r) {
	        	callback(r.insertedCount); //計算新增的筆數
	        });  

		});

	});
}