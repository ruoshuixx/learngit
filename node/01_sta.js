var http = require("http");
 var fs = require("fs");
var server =http.createServer(function (req,res) {
 
    fs.readFile("/Users/xuxing/learngit/node/1.html", function (err, data) {
            //req表示请求，request;  res表示响应，response
            //设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
            res.writeHead(200, { "Content-type": "text/html;charset=UTF-8" });
            res.end(data);
    

  //  res.end("hi,this is my firsrt application"+(1+1));
 
   });
});
server.listen(3000,"127.0.0.1");