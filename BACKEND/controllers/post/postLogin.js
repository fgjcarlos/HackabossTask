// Variables && instances
const bcrypt = require('bcrypt');
const {formatRegister} = require('../../utils/formatRegister');
const {validateRegister} = require('../../validators/validateRegister')
const {logger} = require("../../app/config/logger");
const {insertNewUser} = require('../../db/operationsDB');
const jwt = require('jsonwebtoken');

const login = async (req, res) => { // 1. Get params
    let { email, password, name} = req.body;

    try {
      // info to put inside the token
      const tokenPayload = {
          email: email,
          name: name
      }

      // 5. Generate token, expire in 1 day
      const token = jwt.sign(tokenPayload, process.env.SECRET, { expiresIn: '1d' });

      logger.debug('Login OK');
  return    res.json({ token });

    } catch (e) {

        let msgError = ('Error in login', e.message);
        logger.error(msgError);
        res.status(500).json({error: msgError});
    }

}

module.exports = {
    login
}
