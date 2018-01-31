'use strict';

const Hapi = require('hapi');
const Inert = require('inert');

// Create a server with a host and port
const server = Hapi.server({
    port: 8000,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'dist')
        }
    }
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, h) {

        return 'hello world';
    }
});

const provision = async () => {

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

provision();
