var exec = require("child_process").exec;
var fs = require("fs");

function start(res) {
    console.log("Request handler 'start' was called.");

    fs.readFile("./upload.html", function (err, html) {
        if (!err) {
            res.writeHead(200, "Context-Type:text/html");
            res.write(html);
            res.end();
        }
    })

}

function upload(res) {
    res.writeHead(200, "Context-Type:text/html");
    res.write("<h1>This is a upload.<h1>");
    res.end();
    // console.log("Request handler 'upload' was called.");
}

exports.start = start;
exports.upload = upload;