var http = require('http');
var counter = 0;
var server = http.createServer(function (req, res) {
    if(req.url == '/'){
        console.log('request is comming');
        counter++;
        res.write('I have been accessed ' + counter + ' times.');
        res.end();
    }
}).listen(3002, function(){
    console.log('Server is running at 3002 port');
});