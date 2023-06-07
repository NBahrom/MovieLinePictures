const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const languageRu = sequelize.define('language_ru', {
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

module.exports = languageRu