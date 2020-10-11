const sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Hospital = require('../models/Hospital');

const connection = new sequelize(dbConfig);

Hospital.init(connection);
//connection.sync();

module.exports = connection;