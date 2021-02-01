const {
  validateRegister
} = require('../validators/validateRegister');
const {
  logger
} = require('../app/config/logger');

const isValidParams = async (req, res, next) => {

  let {
    name,
    surname,
    email,
    password
  } = req.body;

  try {

    // 1.validate parameters
    await validateRegister.validateAsync({
      name,
      surname,
      email,
      password
    });

    next();
    logger.debug('Parameters are valid for register');

  } catch (e) {

    let msgError = ('Error in params register:', e.message);
    logger.error(msgError);
    return res.status(500).json({error:msgError});
  }

}
  module.exports = {
    isValidParams
  }
