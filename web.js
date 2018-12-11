var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log("Request for " + pathname + " received");
        route(pathname);
        res.writeHead(200, "Context-Type:text/html");
        res.write("<h1>This is a test.<h1>");
        res.end();
    }

    http.createServer(onRequest).listen(3000);
    console.log("Server has started");
}
exports.start = start;