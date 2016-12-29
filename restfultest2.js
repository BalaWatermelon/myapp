var express=require('express');
var userMgrAPI = express.Router();
var app=express();

userMgrAPI.param('username', function(req, res, next, val) {
    if (val == 'fred') {
        next();
    }else {
        res.send(404);
    }
});


// A set of API to manage users (/apis/admin/user/:username)
userMgrAPI.route('/user/:username')
    .get(function(req, res) {
        // Getting user information        
        res.send(req.params.username);
    })
    .post(function(req, res) {
        // Create a new user
    })
    .delete(function(req, res) {
        // Delete specific user
    })
    .put(function(req, res) {
        // Update
    });

app.use('/apis/admin', userMgrAPI);
app.listen(3000,function(){
    console.log('Ready for port 3000');
});