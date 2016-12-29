var http = require('http');
var nStatic = require('node-static');
var parse=require('url-parse');
var path=require('path');
var finalhandler=require('finalhandler');

var fsp = new nStatic.Server('./public');
var fsi = new nStatic.Server('./Images');

http.createServer(function (req, res) {
	var virtual = path.dirname(parse(req.url,true).pathname);
	var done=finalhandler(req,res);
	console.log(virtual);
// 	fsp.serve(req,res,done);
fsi.serve(req,res,done);
//	if(virtual=='/hello')
//		fsi.serve(req,res,done);
	
	//else{
	//	fsp.serve(req,res);
	//}
	

}).listen(5050);