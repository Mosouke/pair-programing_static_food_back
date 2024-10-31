const express = require('express');
const router = express.Router();
const DinersController = require('../controllers/DinersController');


router.post('/create', DinersController.create);

module.exports = router;