const { Dejeune } = require('../models');
const { Country } = require('../models');

// Créer un déjeuner, le pays est par défaut dans une autre table 
exports.create = async (req, res) => {
    try {
        let { Drink, Entree, Plat, Dessert, countryId } = req.body;

        Drink = Drink === "" ? null : Drink;
        Entree = Entree === "" ? null : Entree;
        Plat = Plat === "" ? null : Plat;
        Dessert = Dessert === "" ? null : Dessert;

        const DejeuneData = {
            Drink,
            Entree,
            Plat,
            Dessert,
            countryId,
        };

        // Utiliser le modèle Sequelize pour créer l'entrée
        const data = await Dejeune.create(DejeuneData);
        res.send(data);

    } catch (err) {
        res.status(500).send({
            message: err.message || 'Une erreur est survenue lors de la création du petit déjeuner.',
        });
    }
};