const { PetitDejeune } = require('../models');

// Créer un petit déjeuner, le pays est par défaut dans une autre table 
exports.create = async (req, res) => {
    try {
        // Destructurer les données du corps de la requête
        let { Drink, Plat, countryId } = req.body;

        // Validation de countryId
        if (!countryId) {
            return res.status(400).send({ message: 'countryId est requis.' });
        }

        // Convertir les chaînes vides en null
        Drink = Drink === "" ? null : Drink;
        Plat = Plat === "" ? null : Plat;

        // Créer l'objet de données pour l'entrée
        const petitDejeuneData = {
            Drink,
            Plat,
            countryId,
        };

        // Utiliser le modèle Sequelize pour créer l'entrée
        const data = await PetitDejeune.create(petitDejeuneData);
        res.status(201).send(data); // Renvoie un statut 201 pour une création réussie

    } catch (err) {
        res.status(500).send({
            message: err.message || 'Une erreur est survenue lors de la création du petit déjeuner.',
        });
    }
};