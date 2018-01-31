'use strict';

const Hapi = require('hapi');


const server = new Hapi.Server({
  host: 'localhost',
  port: 3000
})

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
