const { Sequelize } = require('sequelize');
const { PetitDejeune } = require('../models');
const { Dejeune } = require("../models");
const { Diners } = require('../models');


exports.getStatsPetitDejeunes = async (req, res) => {
    console.log(req.body);
    try {
        const { countryId } = req.body;

        if (!countryId) {
            return res.status(400).send({ message: 'countryId est requis.' });
        }

        const completePetitDejeunes = await PetitDejeune.findAll({
            where: {
                countryId: countryId,
                Drink: { [Sequelize.Op.ne]: null },
                Plat: { [Sequelize.Op.ne]: null },
            }
        });

        const incompletePetitDejeunes = await PetitDejeune.findAll({
            where: {
                countryId: countryId,
                [Sequelize.Op.or]: [
                    { Drink: null },
                    { Plat: null },
                ],
            }
        });

        // Calculer les totaux
        const completeCount = completePetitDejeunes.length;
        const incompleteCount = incompletePetitDejeunes.length;
        const total = completeCount + incompleteCount;

        // Calcul des pourcentages
        const stats = {
            complete: total ? ((completeCount / total) * 100).toFixed(2) : 0,
            incomplete: total ? ((incompleteCount / total) * 100).toFixed(2) : 0,
        };

        res.send(stats);

    } catch (err) {
        res.status(500).send({
            message: err.message || 'Une erreur est survenue lors de la récupération des statistiques.',
        });
    }
};
exports.getStatsDejeunes = async (req, res) => {
    try {
        const { countryId } = req.body;

        if (!countryId) {
            return res.status(400).send({ message: 'countryId est requis.' });
        }

        const completeDejeunes = await Dejeune.findAll({
            where: {
                countryId: countryId,
                Drink: { [Sequelize.Op.ne]: null },
                Entree: { [Sequelize.Op.ne]: null },
                Plat: { [Sequelize.Op.ne]: null },
                Dessert: { [Sequelize.Op.ne]: null },
            }
        });

        const incompleteDejeunes = await Dejeune.findAll({
            where: {
                countryId: countryId,
                [Sequelize.Op.or]: [
                    { Drink: null },
                    { Entree: null },
                    { Plat: null },
                    { Dessert: null },

                ],
            }
        });

        // Calculer les totaux
        const completeCount = completeDejeunes.length;
        const incompleteCount = incompleteDejeunes.length;
        const total = completeCount + incompleteCount;

        // Calcul des pourcentages
        const stats = {
            complete: total ? ((completeCount / total) * 100).toFixed(2) : 0,
            incomplete: total ? ((incompleteCount / total) * 100).toFixed(2) : 0,
        };

        res.send(stats);

    } catch (err) {
        res.status(500).send({
            message: err.message || 'Une erreur est survenue lors de la récupération des statistiques.',
        });
    }
};
exports.getStatsDiners = async (req, res) => {
    try {
        const { countryId } = req.body;

        if (!countryId) {
            return res.status(400).send({ message: 'countryId est requis.' });
        }

        const completeDiners = await Diners.findAll({
            where: {
                countryId: countryId,
                Drink: { [Sequelize.Op.ne]: null },
                Entree: { [Sequelize.Op.ne]: null },
                Plat: { [Sequelize.Op.ne]: null },
                Dessert: { [Sequelize.Op.ne]: null },
            }
        });

        const incompleteDiners = await Diners.findAll({
            where: {
                countryId: countryId,
                [Sequelize.Op.or]: [
                    { Drink: null },
                    { Entree: null },
                    { Plat: null },
                    { Dessert: null },

                ],
            }
        });

        // Calculer les totaux
        const completeCount = completeDiners.length;
        const incompleteCount = incompleteDiners.length;
        const total = completeCount + incompleteCount;

        // Calcul des pourcentages
        const stats = {
            complete: total ? ((completeCount / total) * 100).toFixed(2) : 0,
            incomplete: total ? ((incompleteCount / total) * 100).toFixed(2) : 0,
        };

        res.send(stats);

    } catch (err) {
        res.status(500).send({
            message: err.message || 'Une erreur est survenue lors de la récupération des statistiques.',
        });
    }
};