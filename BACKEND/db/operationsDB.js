const jsonfile = require('jsonfile');
const {logger} = require('../app/config/logger');
//const fileData = '/home/fgjcarlos/Escritorio/HackABoss/HackabossTask/BACKEND/db/db.json';
const fileData = "../db/db.json";

const fs = require('fs');

const getInfoDB = async () => {
  // Checkif exist file
   await existFile(fileData);

    return await jsonfile.readFileSync(fileData);
}

const insertNewUser = async (newUser) => {

       // Checkif exist file
        await existFile(fileData);
        // Get info thet contain json
        let res = await getInfoDB();
        res.push(newUser);
        await jsonfile.writeFileSync(fileData, res);

}


const existFile = async () => {


        if (!await fs.existsSync(fileData)) {
            await fs.writeFileSync(fileData, '[]', {encoding: 'utf8'});
            logger.info('create new file');
        }

}

module.exports = {
    getInfoDB,
    insertNewUser
}
