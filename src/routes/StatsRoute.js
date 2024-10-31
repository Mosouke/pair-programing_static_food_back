const express = require('express');
const router = express.Router();
const StatsController = require('../controllers/StatsController');


router.post('/petitDejeune', StatsController.getStatsPetitDejeunes);
router.post('/dejeune', StatsController.getStatsDejeunes);
router.post('/diners', StatsController.getStatsDiners);

module.exports = router;