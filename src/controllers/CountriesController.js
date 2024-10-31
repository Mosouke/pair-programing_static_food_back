const { Country } = require('../models');

//Récupérer les pays 

exports.findAllCountries = async (req, res) => { 
    try {
        const data = await Country.findAll();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Une erreur est survenue lors de la récupération des pays.',
        });
    }
}