var http = require('http');

var Cookies = require('cookies');
var keys = ['keyboard cat'];

http.createServer(function(req, res){	

var cookies = new Cookies(req, res, { keys: keys });
var lastVisit = cookies.get('LastVisit', { signed: true });
cookies.set('LastVisit', new Date().toISOString(), { signed: true });


 console.log('request was made: ' + req.url);
 
 if (!lastVisit) {
  res.setHeader('UserId', 12);
  res.setHeader("Content-Type", "text/html; charset=utf-8;");
  //res.writeHead(400, {'content-type':'text/plain111'});
  res.write("<h2>Welcome, first time visitor!</h2>");
  res.end();
 } else {
  res.setHeader('UserId', 12);
  res.setHeader("Content-Type", "text/html; charset=utf-8;");
  res.write("<h2>Welcome back!</h2>");
  res.end();
	 
 }
}).listen(9000);


console.log('Server is running on a port over 9000!!!');