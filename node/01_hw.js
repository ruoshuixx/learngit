var http =require("http");
var server =http.createServer(function (req,res) {
    res.writeHead(200,{"Content-type":"text.html;charset=UTF-8"});

    res.end("hi,this is my firsrt application"+(1+1));
});
server.listen(3000,"127.0.0.1");