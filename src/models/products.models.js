const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Products = db.define('products', {

    id:{
        primaryKey:true,
        type:DataTypes.UUID,
        alowNull:false
    },

    name:{
        type:DataTypes.STRING(50),
        alowNull:false
    },

    category:{
        type:DataTypes.STRING(15),
        alowNull:false
    },

    price:{
        type:DataTypes.INTEGER,
        alowNull:false
    },

    isAvailable:{
        type:DataTypes.BOOLEAN,
        alowNull:false,
    }

})

module.exports = Products