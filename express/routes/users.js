var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	var user = { name: 'Anderson'};
  res.send(user);
});

module.exports = router;
