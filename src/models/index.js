const Country = require('./Country');
const PetitDejeune = require('./PetitDejeune');
const Dejeune = require('./Dejeune');
const Diners = require('./Diner');

// Relations 

// Un pays peut avoir plusieurs types de petit déjeuner, déjeuner et dîner
Country.hasMany(PetitDejeune, { foreignKey: 'countryId' });
Country.hasMany(Dejeune, { foreignKey: 'countryId' });
Country.hasMany(Diners, { foreignKey: 'countryId' });

// Chaque type de repas appartient à un pays
PetitDejeune.belongsTo(Country, { foreignKey: 'countryId' });
Dejeune.belongsTo(Country, { foreignKey: 'countryId' });
Diners.belongsTo(Country, { foreignKey: 'countryId' });

module.exports = {
    Country,
    PetitDejeune,
    Dejeune,
    Diners,
};