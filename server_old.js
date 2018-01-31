var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');


app = express();
app.use(bodyParser.json());

app.use(history({
// verbose: true
}));

app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
