const formatRegister =(name, surname, email, password) => {

const templateRegister ={
    "Nombre": name,
    "Apellido": surname,
    "Email": email,
    "Contraseña": password,
    "FechaCreacion": new Date()
}

return templateRegister

}

module.exports ={
    formatRegister
}