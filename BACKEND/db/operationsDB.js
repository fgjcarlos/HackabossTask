const jsonfile = require('jsonfile');
const fileData = './db.json';

const getInfoDB = () =>{

console.log('get info')

    return jsonfile.readFileSync(fileData);
}

const insertNewUser= (newUser) =>{

    let info =getInfoDB();

    console.log(info);

    info.push(newUser);

    jsonfile.writeFileSync(fileData, newUser);   
}

module.exports={
    getInfoDB,
    insertNewUser
}