// Instances & variables
require('dotenv').config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const { logger } = require('./config/logger');

const port = process.env.PORT || 3000;
const app = express();

// Routes
 const routerHome = require('../routes/home');
 const routerRegister = require('../routes/register');
 
// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(logger.requests);

// Endpoints
// Home
 app.use('/home', routerHome);
// Regsiter
app.use('/register', routerRegister );

// **** Router not found ****
// No router found handler
app.use((req, res, next) => {

    next({
        message: 'Router not found',
        statusCode: 404,
        level: 'warn',
    });


});

app.use((err, req, res, next) => {

    const { message, statusCode = 500, level = 'error' } = err;
    // const log = `${logger.header(req)} ${statusCode} ${message}`;
    const log = `${statusCode} ${message}`;

    logger[level](log);

    res.status(statusCode);
    res.json({ message });

});



app.listen(port, err => {
    if (err) {
        return logger.error('ERROR', err);
    }
    logger.info(`listening on port ${port}`);
})
