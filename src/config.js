var config = {};
//development
// https://stackoverflow.com/questions/40809317/where-to-store-api-keys-in-express-node-for-heroku
var env = process.env.NODE_ENV || 'development';
if(env === 'development'){
  //config = require('./env/development');
  // Setup Development Keys here for Auth0 and mLab
} else if (env === 'test'){
    //config = require('./env/test');
} else if(env === 'production'){
    //config = require('./env/production');
    // Setup Development Keys here for Auth0 and mLab
}

module.exports = config;