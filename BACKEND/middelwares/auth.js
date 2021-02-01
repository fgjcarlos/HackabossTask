// Variables && instances
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { logger } = require("../app/config/logger");
const {getUserDB} = require('../db/operationsDB');


const isAuthenticated = async(req, res, next) => {

    let msgInfo = 'Authorization failure, no token';

    // Store the token of postman
    const { authorization } = req.headers;

    try {


        if (!authorization) {
            // Authorization failure, redirect login page
            // if(req.url === '/')  return res.redirect(308,'/login');

            logger.info(msgInfo);
            return res.status(401).json({ error: msgInfo });
        }


        // Trunc Bearer
        const token = authorization.replace('Bearer ', '');


            // 1. Check the token, decode token and search user with email of token
            const decodedToken = jwt.verify(token, process.env.SECRET);

            // 2. Search in database
            const user = await getUserDB(decodedToken.email);

            // if not user --> failed
            if (!user) {
                msgInfo = 'Not exist user in db';
                return res.status(401).json({ error: msgInfo });
            }

            req.auth = decodedToken;

            logger.debug('User is authenticated');

            next();



    } catch (e) {

        let msgError = ('Error in authorization:', e.message);
        logger.error(msgError);
        res.status(401).json({ info: msgError });
        return;
    }
}

module.exports = {
    isAuthenticated
}
