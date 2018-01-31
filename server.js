const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');

const server = new Hapi.Server({
    port: process.env.PORT || 8080,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'dist')
        }
    }
});

const provision = async () => {

    await server.register(Inert);

    // server.route({
    //     method: 'GET',
    //     path: '/{param*}',
    //     handler: {
    //         directory: {
    //             path: '.',
    //             redirectToSlash: true,
    //             index: true,
    //         }
    //     }
    // });

    // Example api call
    server.route({
      method: 'GET',
      path: '/api/call',
      handler: function (request, h) {
        return {
          message: 'Hello!'
        };
      }
    });

    server.route({
      method: 'GET',
      path: '/{path*}',
      handler: {
        file: './dist/index.html'
      }
    });

    await server.start();

    console.log('Server running at:', server.info.uri);
};

provision();
