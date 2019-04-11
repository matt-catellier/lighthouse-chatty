var initializeExpress = require('./express-server')
var initializeSocket = require('./web-socker-server')

let app;
app = initializeExpress(app);
app = initializeSocket(app);

console.log('app configured');