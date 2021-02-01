const Joi = require('joi');

const validTypes = Joi.object({

    type: Joi.string().lowercase().trim()
        .valid('books', 'characters', 'houses')
        .error(
            new Error('The type entered is wrong, only books, characters, houses ')
        ),
})

module.exports = {
    validTypes
}
