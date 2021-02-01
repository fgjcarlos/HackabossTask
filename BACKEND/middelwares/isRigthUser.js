// Variables && instances
require('dotenv').config();
const jwt = require('jsonwebtoken');
const jsonfile = require('jsonfile');
const {  logger} = require('../app/config/logger');
const {  getInfoDB,getUserDB} = require('../db/operationsDB');
const bcrypt = require('bcrypt');

const {  validateRegister} = require('../validators/validateRegister');

const isRigthUser = async (req, res, next) => {

  let { email,    password  } = req.body;

  try {

    // 3. If are valid, check if they are in the database
    const user = await getUserDB(email);

    // Not user in database --> failed
    if (!user) {
        msgInfo = 'User does not exist in the db'
        logger.info(msgInfo);
        return res.status(401).json({ info: msgInfo });
    }

    // 4. Check password with bcrypt
    const db_password = user['Contraseña'];
    const passwordIsvalid = await bcrypt.compare(password, db_password);

    // If not valid password --> failed
    if (!passwordIsvalid) {
        msgInfo = 'Wrong password'
        logger.info(msgInfo);
        return res.status(401).json({ info: msgInfo });
    }

    req.name = user['Nombre'];

    next();
    logger.debug('User exist --> preparing token');

  } catch (e) {

    let msgError = ('Error in params login:', e.message);
    logger.error(msgError);
    return res.status(500).json({error:msgError});
  }

}


module.exports = {
  isRigthUser
}
