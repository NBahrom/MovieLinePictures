const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const adminUsers = sequelize.define('admin_users', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING(1234),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(1234),
        allowNull: false
    }
})

module.exports = adminUsers