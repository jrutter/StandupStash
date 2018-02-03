var express = require('express');
var app = express();
var itemRoutes = express.Router();

itemRoutes.get('/api', (req, res) => {
  res.json('test');
});

module.exports = itemRoutes;
