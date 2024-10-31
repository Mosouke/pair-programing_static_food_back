const { Diners } = require('../models');

// Créer un Diners, le pays est par défaut dans une autre table 
exports.create = async (req, res) => {
    console.log(req.body)
    try {
        let { Drink, Entree, Plat, Dessert, countryId } = req.body;

        Drink = Drink === "" ? null : Drink;
        Entree = Entree === "" ? null : Entree;
        Plat = Plat === "" ? null : Plat;
        Dessert = Dessert === "" ? null : Dessert;

        const dinersData = {
            Drink,
            Entree,
            Plat,
            Dessert,
            countryId,
        };
        console.log(dinersData)

        // Utiliser le modèle Sequelize pour créer l'entrée
        const data = await Diners.create(dinersData);
        res.send(data);

    } catch (err) {
        res.status(500).send({
            message: err.message || 'Une erreur est survenue lors de la création du petit déjeuner.',
        });
    }
};