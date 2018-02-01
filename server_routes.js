var express = require('express');
var app = express();
var router = express.Router();


router.get('/api', (req, res) => {
  res.json('test');
});

module.exports = router;


// // Require Item model in our routes module
// // var Item = require('../models/Item');
// // Defined store route
// itemRoutes.route('/test').post(function (req, res) {
//   // var item = new Item(req.body);
//       // item.save()
//     // .then(item => {
//     // res.status(200).json({'item': 'Item added successfully'});
//     // })
//     // .catch(err => {
//     // res.status(400).send("unable to save to database");
//     // });
//     res.status(200).json({'item': 'Item added successfully'});
//
// });
