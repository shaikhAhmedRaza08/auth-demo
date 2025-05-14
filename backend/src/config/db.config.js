const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,     // Database name
    process.env.DB_USER,     // Username
    process.env.DB_PASSWORD, // Password
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT || 'postgres',
        port: process.env.DB_PORT || 5432,
        logging: false,         // Disable SQL logging in console (enable if needed)
    }
);

module.exports = sequelize;
