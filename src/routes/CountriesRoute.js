const express = require('express');
const router = express.Router();
const CountriesController = require('../controllers/CountriesController');

router.get('/all', CountriesController.findAllCountries);

module.exports = router;