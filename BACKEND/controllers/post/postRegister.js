// Variables && instances
const bcrypt = require('bcrypt');
const {formatRegister} = require('../../utils/formatRegister');
const {validateRegister} = require('../../validators/validateRegister')
const { logger } = require("../../app/config/logger");
const {insertNewUser} = require('../../db/operationsDB');


const register = async(req, res) => {

    // 1. Get params
    let {name, surname,email ,password} = req.body;

    try {

        // 2.0 validate parameters
    
        await validateRegister.validateAsync({name, surname,email ,password});

        console.log(name, surname,email ,password)

        // 3. Post new admin
        // Encrypt password
        const passwordEncrypt = await bcrypt.hash(password, parseInt(process.env.PASSWORD_LEN));

        // Insert into db new user


       const newUser = await formatRegister(name, surname,email,passwordEncrypt);


        await insertNewUser(newUser);

        let msgInfo = 'Register new user sucessfull';

        logger.debug(msgInfo);
        res.json({info:msgInfo});
    } catch (e) {
        console.log(e)

        let msgError =('Error in REGISTER', e.message) ;
        logger.error(msgError);
        res.status(500).json({error:msgError});
    }

}

module.exports = {
    register
}
