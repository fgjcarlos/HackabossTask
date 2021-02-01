// Variables && instances
const bcrypt = require('bcrypt');
const {formatRegister} = require('../../utils/formatRegister');
const {validateRegister} = require('../../validators/validateRegister')
const {logger} = require("../../app/config/logger");
const {insertNewUser} = require('../../db/operationsDB');

const register = async (req, res) => { // 1. Get params
    let {name, surname, email, password} = req.body;

    try {

        // Encrypt password
        const passwordEncrypt = await bcrypt.hash(password, parseInt(process.env.PASSWORD_LEN));

        // Format new user
        const newUser = await formatRegister(name, surname, email, passwordEncrypt);

        // Insert into db new user
        await insertNewUser(newUser);

        let msgInfo = 'Register new user sucessfull';

        logger.debug(msgInfo);
      return  res.json({info: msgInfo});
    } catch (e) {

        let msgError = ('Error in REGISTER', e.message);
        logger.error(msgError);
        res.status(500).json({error: msgError});
    }

}

module.exports = {
    register
}
