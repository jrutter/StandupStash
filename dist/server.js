var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');


app = express();

app.use(history({
// verbose: true
}));

app.use(serveStatic(__dirname));

var port = process.env.PORT || 8080;
app.listen(port);
console.log('server started '+ port);
