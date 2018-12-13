var serverRun = require('./web');
var router = require('./router');
var requestHandlers = require('./requestHandlers');
Q = 12348877;
var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/favicon.ico'] = requestHandlers.icon;

serverRun.start(router.route, handle);