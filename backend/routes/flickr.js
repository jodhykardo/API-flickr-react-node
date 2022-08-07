var express = require('express');
var router = express.Router();
const userController = require('../controllers/flickr');

router.get('/', userController.read);

router.get('/:id', userController.author);

module.exports = router;
