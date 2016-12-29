var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/mymondb", function (err, db) {
   
     if(err) throw err;

     //Write databse Insert/Update/Query code here..
     console.log('mongodb is running!');
     db.close(); //關閉連線           
});