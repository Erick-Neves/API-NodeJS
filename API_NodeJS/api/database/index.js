//Sequelize- make connection with database
const sequelize = require('sequelize')
//Config- set a json file, to get default values(config/default.json)
const config = require('config')
//This will be the object to carry the SQL Connection
const instance = new sequelize(
    config.get('mysql.database'),
    config.get('mysql.user'),
    config.get('mysql.password'),{
        host: config.get('mysql.host'),
        dialect:'mysql'
    }
)
//This exports the SQL Connection to other classes
module.exports = instance