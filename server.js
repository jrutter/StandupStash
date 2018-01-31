'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server(+process.env.PORT, '0.0.0.0');

server.route({
    method: 'GET',
    path: '/',
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
