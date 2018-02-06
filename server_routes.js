var express = require('express');
var app = express();
var router = express.Router();


router.get('/test', (req, res) => {
  res.json('test');
});

module.exports = router;
