const UserController = require('../controller/user');

var express = require('express');
var router = express.Router();

router.get('/',UserController.index);

module.exports = router;
