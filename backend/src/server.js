const dotenv = require('dotenv');
dotenv.config({
    path: `./config.env`,
});
const db = require('./config/db.config');
const connectDB = require("./utils/connectDB");
const app = require('./app');


connectDB();

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})