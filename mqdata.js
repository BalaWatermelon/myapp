var mongo=require('mongodb');
var Server=mongo.Server;
var Db=mongo.Db;
var server=new Server('localhost',27017,{
	auto_reconnect:true
});

var db=new Db('mymondb',server);
var onErr=function(err,callback)
{
	db.close();
	callback(err);
};

module.exports.stuList=function(callback){
    db.open(function(err,db){
    	db.collection('Persons',function(err,collection){
          collection.find().toArray(function(err,items){
			if(err) throw err;
			db.close();
			callback(items);				
		  });
    	});
    });
}

/*var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/mymondb";

exports.teamList=function(callback)
{MongoClient.connect(url,function(err,db){
	findDocuments(db,function(cc){      
    	callback(cc);
    	db.close();
    });
 });
}
var findDocuments=function(db,callback){
   var collection=db.collection('Persons');
   collection.find({}).toArray(function(err,docs){
       callback(docs);
   });
}*/
