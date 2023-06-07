const Sequelize = require('sequelize')

const sequelize = new Sequelize('MLP', 'root', 'Baxa9229', {
    dialect: 'mysql',
    host: 'localhost'
})

// const sequelize = new Sequelize('farruhon_mlp', 'farruhon_mlp_user', 'mlp_user_9229', {
//     dialect: 'mysql',
//     host: 'localhost'
// })

module.exports = sequelize