const express = require('express');
const router = express.Router();
const DejeuneController = require('../controllers/DejeuneController');


router.post('/create', DejeuneController.create);

module.exports = router;