var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');
// var locationController = require('../controllers/location');

router.post('/api/user', userController.create);
router.get('/api/user', userController.index);
router.get('/api/user/:users_id', userController.show);
router.put('/api/user/:users_id', userController.update);
router.delete('/api/user/:users_id', userController.destroy);

module.exports = router;
