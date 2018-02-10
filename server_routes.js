var express = require('express');
var app = express();
var serverRoutes = express.Router();


serverRoutes.get('/test', (req, res) => {
  res.json('test');
});

module.exports = serverRoutes;
