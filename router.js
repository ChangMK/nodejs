function route(handle, pathname, res) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](res);
    } else {
        res.writeHead(302, {
            'Location': '/'
        });
        res.end();
    }
}
exports.route = route;