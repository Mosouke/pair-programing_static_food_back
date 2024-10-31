const express = require('express');
const router = express.Router();
const PetitDejeuneController = require('../controllers/PetitDejeuneController');


router.post('/create', PetitDejeuneController.create);

module.exports = router;