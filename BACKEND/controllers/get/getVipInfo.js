// Variables && instances
require('dotenv').config();
const { logger } = require('../../app/config/logger');
const axios = require('axios');

const vipInfo =async (req, res, error) => {

try{

  const urlApi = "https://anapioficeandfire.com/api/houses/1";

  const resApi = await axios.get(urlApi);
  return res.json( resApi.data);
}catch(e){
  let msgError = 'Error in vipaccess';
  logger.info(msgError);
  return res.status(401).json({ error: msgError });
}

}


module.exports = {
    vipInfo
}
