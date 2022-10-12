const { Sequelize } = require('sequelize')

const config = require('../config')


//utilizando el archivo config.js//
const db = new Sequelize({
    dialect: 'postgres',
    host:config.db.host,
    username:config.db.username,
    password:config.db.password,
    database:config.db.name 
})



module.exports = db 