var MongoClient=require('mongodb').MongoClient;

module.exports.personList=function(callback){
	MongoClient.connect("mongodb://localhost:27017/mymondb",function(err,db){
		db.collection("Persons",function(err,collection){
			collection.find().toArray(function(err,items){
				if(err) throw err;
				db.close();
				callback(items);		
			});
			
		});
		
	});
}