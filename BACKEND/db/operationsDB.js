const jsonfile = require('jsonfile');
const {logger} = require('../app/config/logger');
const fileData = '/home/fgjcarlos/Escritorio/HackABoss/HackabossTask/BACKEND/db/db.json';
const fs = require('fs');

const getInfoDB = async () => {
    return await jsonfile.readFileSync(fileData);
}

const insertNewUser = async (req,res,newUser) => {


    try { // Checkif exist file


console.log(newUser);

        await existFile(fileData);

        // Get info thet contain json
        let res = await getInfoDB();

        console.log('op:res',res);

        res.push(newUser);

        console.log('op:res',res);

        await jsonfile.writeFileSync(fileData, res);

    } catch (e) {
        let msgError = ('Error register new user', e.message);
        logger.error(msgError);
        res.status(500).json({error: msgError});
    }
}


const existFile = async (req,res) => {

    try { // 1. Check exist file
        if (await fs.existsSync(fileData)) {
            logger.info('The path exists, add new user');
        } else {
            await fs.writeFileSync(fileData, '[]', {encoding: 'utf8'});
            logger.info('create new file');
        }

    } catch (e) {
        let msgError = ('Error in exist file', e.message);
        logger.error(msgError);
        res.status(500).json({error: msgError});
    }
}

module.exports = {
    getInfoDB,
    insertNewUser
}
