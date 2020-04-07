var http = require('http');

http.createServer(function(req, res){	

 console.log('request was made: ' + req.url);
 
  res.setHeader('UserId', 12);
  res.setHeader("Content-Type", "text/html; charset=utf-8;");
  res.write("<h2>Hello World!</h2>");
  res.end();	 
}).listen(9000);


console.log('Server is running on a port over 9000!!!');