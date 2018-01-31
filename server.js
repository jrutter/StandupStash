'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');

// const server = new Hapi.Server();
// var serverPort = process.env.PORT || 8080;

const server = Hapi.server({
    port: process.env.PORT || 8080,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, '/dist')
        }
    }
});

server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, h) {

        return 'hello world';
    }
});

const startServer = async () => {

    await server.register(Inert);

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                redirectToSlash: true,
                index: true,
            }
        }
    });

    await server.start();

    console.log('Server running at:', server.info.uri);
};

startServer();
