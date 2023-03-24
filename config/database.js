const { Sequelize } =require ("sequelize");
const dbConfig = require ("./db.config.js")
const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: 'mysql',
    charset: 'utf8mb4',
    logging: false
  });
 
module.exports = db;  