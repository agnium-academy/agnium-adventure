'use strict';

// Require all node modules
const SwaggerHapi = require('swagger-hapi');
const Path  = require('path')
const Hapi  = require('hapi');
const Hoek  = require('hoek')
const Inert = require('inert')
const Joi   = require('joi')

// Create the app server
const app   = new Hapi.Server();

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

// Create Swagger Hapi
SwaggerHapi.create(config, function(err, swaggerHapi) {
  if (err) { throw err; }

  var port = process.env.PORT || 10010;
  app.connection({ port: port });
  app.address = function() {
    return { port: port };
  };

  app.register(swaggerHapi.plugin, function(err) {
    if (err) { return console.error('Failed to load plugin:', err); }
    app.start(function() {
      if (swaggerHapi.runner.swagger.paths['/hello']) {
        console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
      }
    });
  });
});

// Register Hapi plugins
app.register(Inert, () => {})
