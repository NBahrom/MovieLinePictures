const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const languageUz = sequelize.define('language_uz', {
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

module.exports = languageUz