const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Dejeune = sequelize.define('Dejeune', {
    Drink: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
    },
    Entree: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
    },
    Plat: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
    }, 
    Dessert: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
    },
    countryId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Countries', // Le nom de la table correspondant au modèle Country
            key: 'id',
        },
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Dejeune',
});

module.exports = Dejeune;