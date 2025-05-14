const dotenv = require('dotenv');
dotenv.config({
    path: `./config.env`,
});
const app = require('./app');


app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})