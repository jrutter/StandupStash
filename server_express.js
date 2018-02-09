var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
var profileRoutes = require('./server_routes');

var history = require('connect-history-api-fallback');

const app = express();

app.use(bodyParser.json());
app.use(history());
app.use(cors());

// app.use('/', profileRoutes);

app.use(express.static('dist'));

app.get('/test', function(req, res) {
  res.send('Main Home');
})


var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
