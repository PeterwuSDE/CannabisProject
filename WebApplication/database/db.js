// const mysql = require("mysql");
//const dbConfig = require("../configs/config.js");
// const Sequelize = require("sequelize");

// Create a connection to the database
const config = {
  host: 'ec2-34-233-157-9.compute-1.amazonaws.com',
  user: 'jpfihamcoukuzf',
  port: 5432,
  password: '8f287920ecd72f284cb4adeda8ef8b19fe4e4cb562f3fbcd96bdf961cbeb76aa',
  database: 'd58lb12p14kqn2',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// const sequelize = new Sequelize(config.database, config.user, config.password, {
//   host: config.host,
//   dialect: config.dialect,

//   pool: {
//     max: config.pool.max,
//     min: config.pool.min,
//     acquire: config.pool.acquire,
//     idle: config.pool.idle
//   }
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;



// open the MySQL connection
// connection.connect(error => {
//   if (error) throw error;
//   console.log("Successfully connected to the database.");
// });

// db.userProfile = require("../models/userProfile")(sequelize, Sequelize);

module.exports = config;