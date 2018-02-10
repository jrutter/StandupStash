var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
var profileRoutes = require('./server_routes');

// var history = require('connect-history-api-fallback');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// app.use(history());
// app.use(cors());

// app.use('/', profileRoutes);

app.use(express.static(path.join(__dirname, '/dist')))

// app.use(express.static('dist'));

app.get('/', function (req, res, next) {
  res.sendfile('./dist/index.html')
})


var port = process.env.PORT || 8080;
app.listen(port);
console.log('server started '+ port);

app.use('/api', profileRoutes)
