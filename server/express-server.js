const express = require('express')

const initializeExpress = (app) => {
  app = express().use(express.json());
  registerRoutes(app)
  app = app.listen('3001', () => {console.log('express listening port 3001');})
  return app;
}

const registerRoutes = (app) => {
  app.post('/', function (request, response) {
    console.log(request.body);      // your JSON
    response.send(request.body);    // echo the result back
  });
}

module.exports = initializeExpress;


