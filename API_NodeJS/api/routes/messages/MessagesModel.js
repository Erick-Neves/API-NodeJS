const sequelize = require('sequelize')
//This receive the return of /api/database/index.js, that is a MySQL connection
const instance = require('../../database')
//This will set table columns
const columns = {
    title:{
        type: sequelize.STRING,
        allowNull: false
    },
    text:{
        type: sequelize.STRING,
        allowNull: false
    },
    category:{
        type: sequelize.ENUM('Article', 'SocialPost')
    }
}

//This will set some properties to a table
const options = {
    freezeTableName: true,
    tableName: 'messages',
    timestamps: true
}
module.exports = instance.define('messages', columns, options)