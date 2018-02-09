var express = require('express');
var app = express();
var router = express.Router();


router.get('/api', (req, res) => {
  res.json('test');
});

module.exports = router;
