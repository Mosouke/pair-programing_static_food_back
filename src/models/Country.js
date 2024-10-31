const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Countries = sequelize.define('Countries', {
    Country: {
        type: DataTypes.ENUM('France', 'Germany', 'Japan', 'Brazil', 'Canada'),
        allowNull: false,
        unique: true,
    },
});

module.exports = Countries;