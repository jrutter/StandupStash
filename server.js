'use strict';

var Hapi = require('hapi');

const server = new Hapi.Server();
var serverPort = process.env.PORT || 8080;

server.connection({
		port: serverPort
	});

server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
