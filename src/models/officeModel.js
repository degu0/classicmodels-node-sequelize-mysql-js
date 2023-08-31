const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');

const officeModel = sequelize.define('office', {
    officeCode: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    addressLine1: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    addressLine2: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    state: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    country: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    postalCode: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    territory: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
}, {
    tableName: 'offices',
    timestamps: false
});

module.exports = officeModel;