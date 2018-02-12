const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const history = require('connect-history-api-fallback');

const app = express();

app.use(require('connect-history-api-fallback')())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(history({
  verbose: true
}));

app.get('/api', (req, res) => res.send('Hello World!'))
app.use('/', express.static(path.join(__dirname, 'dist')));

var port = process.env.PORT || 8080;
app.listen(port);
console.log('server started '+ port);
