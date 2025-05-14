const sequelize = require('../config/db.config');

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('DB connected...');
        await sequelize.sync({alter: true}); // or { force: true } to drop & recreate
        console.log('User model synced.');
    } catch (err) {
        console.error('DB connection error:', err);
    }
};

module.exports = connectDB;