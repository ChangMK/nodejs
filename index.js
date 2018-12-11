var serverRun = require('./web');
var router = require('./router');

serverRun.start(router.route);