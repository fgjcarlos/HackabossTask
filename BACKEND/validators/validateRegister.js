const Joi = require('joi');

const validateRegister = Joi.object({

    email: Joi.string().lowercase().trim()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'es'] } })
        .required()
        .error(
            new Error('Email must have the following structure: name@xxxx.[com, es, net]')
        ),
    name: Joi.string().lowercase().trim()
        .alphanum()
        .min(3)
        .max(30)
        .required()
        .error(
            new Error('The name entered is not valid')
        ),

    surname: Joi.string() //.lowercase().trim()
        //.alphanum()
        .min(3)
        .max(30)
        .required()
        .error(
            new Error('The surname entered is not valid')
        ),

    password: Joi.string().trim()
        .pattern(new RegExp('^[a-zA-Z0-9]{8,16}$'))
        .required()
        .error(
            new Error('Password must have 8 caracters min.')
        )

})

module.exports = {
    validateRegister
}