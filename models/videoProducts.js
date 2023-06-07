const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const videoProduct = sequelize.define('videoproduct', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    videoUrl: {
        type: Sequelize.STRING(1234),
        allowNull: false
    },
    titleRu: {
        type: Sequelize.STRING(1234),
        allowNull: false
    },
    titleEn: {
        type: Sequelize.STRING(1234),
        allowNull: false
    },
    titleUz: {
        type: Sequelize.STRING(1234),
        allowNull: false
    },
    subTitleRu: {
        type: Sequelize.STRING(1234),
        allowNull: false
    },
    subTitleEn: {
        type: Sequelize.STRING(1234),
        allowNull: false
    },
    subTitleUz: {
        type: Sequelize.STRING(1234),
        allowNull: false
    },
})

module.exports = videoProduct