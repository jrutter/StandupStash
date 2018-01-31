'use strict';

var Hapi = require('hapi');

var port = process.env.PORT || 5000;
var server = new Hapi.Server(port);

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
