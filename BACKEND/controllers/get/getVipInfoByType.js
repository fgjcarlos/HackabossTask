// Variables && instances
require('dotenv').config();
const { logger } = require('../../app/config/logger');
const axios = require('axios');
const {validTypes} = require('../../validators/validTypes');

const vipInfoByType =async (req, res, error) => {

try{

// parmas type
const {type} = req.params;
// query books:isbn, character: gender, houses:region
const {isbn, gender,region} = req.query;

// 1. valid parmas
await validTypes.validateAsync({ type   });

const urlApi = `https://anapioficeandfire.com/api/${type}/`;

 const resApi = await axios.get(urlApi);

let filter =':'

if(type === 'houses' && region){
filter = resApi.data.filter((item) => item.region === region);
} else if(type === 'books' && isbn)  {
  filter = resApi.data.filter((item) => item.isbn === isbn);
} else if(type === 'characters' && gender)  {


  filter = resApi.data.filter((item) => item.gender === gender);
}else{
     filter = resApi.data;
}

return res.json( filter);

}catch(e){
  let msgError = 'Error in vipaccess';
  logger.info(msgError);
  return res.status(500).json({ error: msgError });
}

}


module.exports = {
    vipInfoByType
}
