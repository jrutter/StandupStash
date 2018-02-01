var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
var itemRoutes = require('./server_routes');

var history = require('connect-history-api-fallback');


app = express();
app.use(bodyParser.json());

app.use(history({
// verbose: true
}));
// app.get('/api/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`));


app.use(express.static('dist'));

app.use('/blog-posts', itemRoutes);

//routers/blogPostsRouter.js



var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
