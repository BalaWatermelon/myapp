var MongoClient=require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/mymondb", function(err,db){
		db.collection('Persons',function(err,collection){
			//第一個參數是要更新的條件，第二個參數$set:更新的欄位及內容.
			//第三個參數writeConcern，第四個參數執行update後的callback函式
			collection.update({id:1},{ $set: { firstName:'James', lastName:'Gosling'} },
				{w:1}, function(err, result){
					if(err) throw err;
					console.log('Document Updated Successfully');
				});

		});
		db.close(); //關閉連線
}); 