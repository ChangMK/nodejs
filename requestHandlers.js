var exec = require("child_process").exec;
var fs = require("fs");
var querystring = require('querystring');
var formidable = require("formidable");

function start(res) {
    console.log("Request handler 'start' was called.");

    fs.readFile("./upload.html", 'utf-8', function (err, html) {
        if (!err) {
            //res.setHeader("Cache-Control", "no-cache");
            res.setHeader('ETag', Q);
            res.writeHead(200, "Content-Type:text/html");
            res.write(html);
            res.end();
        }
    });

}

function upload(res, req) {
    console.log("Request handler 'upload' was called.");
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log("parse done");
        fs.renameSync(files.upload.path, "/tmp/123.jpg");
        console.log("Reanme Done!");
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.write("received image:<br/>");
        res.write("<img src='/show' />");
        res.end();
    });
}

function icon(res) {
    console.log("Request handler 'icon' was called.");

    fs.readFile("./favicon.ico", function (err, data) {
        if (!err) {
            res.setHeader("Content-Type", "image/x-icon");
            res.setHeader("Cache-Control", "no-store");
            res.setHeader('Etag', '00000000');
            res.write(data);
            res.end();
        }
    });

}

function show(res) {

    fs.readFile('/tmp/123.jpg', "binary", function (err, data) {
        if (err) {
            res.writeHead(500, {
                "Context-Type": "text/plain"
            });
            res.end(err + "\n");
        } else {
            res.writeHead(200, {
                "Context-Type": "image/jpg"
            });
            res.end(data, "binary");
        }
    });
}


exports.start = start;
exports.upload = upload;
exports.icon = icon;
exports.show = show;