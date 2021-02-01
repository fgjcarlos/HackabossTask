const jsonfile = require('jsonfile');
const {
  logger
} = require('../app/config/logger');
const {
  getInfoDB
} = require('../db/operationsDB');

const {
  validateRegister
} = require('../validators/validateRegister');

const isUser = async (req, res, next) => {

  let {
    name,
    surname,
    email,
    password
  } = req.body;

  try {

    // 2. Get info db
    let data = await getInfoDB();

    // Filter new user
    let isUser = data.map(item => item['Email']).filter((item) => item === email);

    logger.debug(isUser);

    // if user exist-> faild
    if (isUser.length >0) {
      msgInfo = `The user with email ${email} already exists`;
      logger.error(msgInfo);
      return res.json({error:msgInfo});
    }

    next();
    logger.debug('User not exist -->Register');

  } catch (e) {

    let msgError = ('Error in params register:', e.message);
    logger.error(msgError);
    return res.status(500).json({error:msgError});
  }

}


module.exports = {
  isUser
}
