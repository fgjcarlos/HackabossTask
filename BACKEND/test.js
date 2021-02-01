const fileData = '/home/fgjcarlos/Escritorio/HackABoss/HackabossTask/BACKEND/db/db.json';
const jsonfile = require('jsonfile');
const fs = require('fs');



const h = async() =>{

    try {

        await existFile(fileData);
 
    let   res = await jsonfile.readFileSync(fileData);

    let o = {
        "Nombre": "Admin2",
        "Apellido": "User2",
        "Email": "user2@gmail.com",
        "Contraseña": "123456789",
        "FechaCreacion": "2021-01-31T22:05:26.709Z"
    }




   res.push(o)

  //  console.log('j:',res)


   await jsonfile.writeFileSync(fileData, res);
  //  await fs.writeFileSync(fileData,{encoding:'utf8'} );
    

//     res =await  fs.readFileSync('./db/db.json', {encoding:'utf8', flag:'r'}); res =await  fs.readFileSync(fileData, {encoding:'utf8', flag:'r'});

    res =  await jsonfile.readFileSync(fileData);
    
   console.log('res:', res)

    } catch (error) {
        console.log('error', error)
    }
   

}


const existFile =async () => {
   

    console.log('exsis??')

    try {
        console.log('fff');
        // 1. ver q existe el archivo
        if (await fs.existsSync(fileData)) {
            console.log('The path exists.');
        }else{

            console.log('create new file');
            await fs.writeFileSync(fileData,'[]');
        }


    } catch (error) {
        console.log('error en Exist');
    }
}


h();
