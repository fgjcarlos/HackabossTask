const {  validateLogin} = require('../validators/validateLogin');
const {  logger} = require('../app/config/logger');

const isValidParams = async (req, res, next) => {

  let { email,    password  } = req.body;

  try {

    // 1.validate parameters
    await validateLogin.validateAsync({  email,      password    });

    next();
    logger.debug('Parameters are valid for login');

  } catch (e) {

    let msgError = ('Error in params login:', e.message);
    logger.error(msgError);
    return res.status(401).json({error:msgError});
  }

}
  module.exports = {
    isValidParams
  }
