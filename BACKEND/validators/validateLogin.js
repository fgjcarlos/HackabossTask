const Joi = require('joi');

const validateLogin = Joi.object({

    email: Joi.string().lowercase().trim()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'es'] } })
        .required()
        .error(
            new Error('Email must have the following structure: name@xxxx.[com, es, net]')
        ),

    password: Joi.string().trim()
        .pattern(new RegExp('^[a-zA-Z0-9]{8,16}$'))
        .required()
        .error(
            new Error('Password must have 8 caracters min.')
        )
})

module.exports = {
    validateLogin
}
