var http = require('http');

http.createServer(function(req, res){	 

console.log('request was made:' + req.url);

  res.writeHead(400, {'content-type':'text/plain'});
  res.write("Hello World!!!!");
  res.end();	 
}).listen(9000);


console.log('Server is running on a port over 9000!!!');