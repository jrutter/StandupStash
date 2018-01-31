'use strict';

var Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');

const server = new Hapi.Server();
var serverPort = process.env.PORT || 8080;

server.connection({
		port: serverPort
	});

server.register(require('inert'), (err) => {
  if (err) {
        throw err;
  }

  server.route({
      method: 'GET',
      path: '/hello',
      handler: function (request, reply) {
          reply('Hello, world!');
      }
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: Path.join(__dirname, 'dist')
        }
    }
});

  server.start((err) => {

      if (err) {
          throw err;
      }
      console.log(`Server running at: ${server.info.uri}`);
  });

});
