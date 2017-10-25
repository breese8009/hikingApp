var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');
// var locationController = require('../controllers/location');

router.get('/api/user', userController.index)
router.post('/api/user', userController.create)

module.exports = router;
