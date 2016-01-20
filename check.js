var http=require("http");

http.createServer(function(request,response)
{
	response.writeHead(200,{'content-type':'text/plain'});
	response.end('manku');
	}).listen(8087);

console.log('server running running at http://127.0.0.1:8087/');
