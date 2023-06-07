const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const languageEn = sequelize.define('language_en', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: Sequelize.STRING(1234),
        allowNull: false
    },
})

module.exports = languageEn