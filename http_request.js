// process.stdin.resume();
// process.stdin.on('data', function (data) {
//     process.stdout.write('read from console: ' + data.toString());
// });


// setTimeout(() => {
//     console.log('timeout');
// }, 0);

// setImmediate(() => {
//     console.log('immediate');
// });

var http = require('http');
var querystring = require('querystring');
var contents = querystring.stringify({
    name: 'byvoid',
    email: 'byvoid@byvoid.com',
    address: 'Zijing 2#, Tsinghua University',
});
var options = {
    host: '127.0.0.1',
    port: '3000',
    path: '/upload',
    method: 'POST',
    headers: {
        'Content-Type': 'text/plain',
        'Content-Length': contents.length
    }
};
var req = http.request(options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log(data);
    });
});
req.write(contents);
req.end();