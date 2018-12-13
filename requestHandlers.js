var exec = require("child_process").exec;
var fs = require("fs");

function start(res) {
    console.log("Request handler 'start' was called.");

    fs.readFile("./upload.html", function (err, html) {
        if (!err) {
            //res.setHeader("Cache-Control", "no-cache");
            res.setHeader('ETag', Q);
            res.writeHead(200, "Context-Type:text/html");
            res.write(html);
            res.end();
        }
    })

}

function upload(res, postData) {
    console.log("Request handler 'upload' was called.");
    res.statusCode = 200;
    res.setHeader = ("Context-Type", "text/plain");
    // res.writeHead(200, {
    //     "Content-Type": "text/plain"
    // });
    res.write("You've sent: " + postData);
    res.end();
}

function icon(res) {
    console.log("Request handler 'icon' was called.");

    fs.readFile("./favicon.ico", function (err, data) {
        if (!err) {
            res.setHeader("Content-Type", "image/x-icon");
            res.setHeader("Cache-Control", "no-store");
            res.setHeader('Etag', '00000000')
            res.write(data);
            res.end();
        }
    })

}
exports.start = start;
exports.upload = upload;
exports.icon = icon;