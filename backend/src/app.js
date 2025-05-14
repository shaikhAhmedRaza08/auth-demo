const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
}

app.use('/', (req, res) => {
    res.status(200).json({
        message: 'Route works!'
    })
});


module.exports = app;