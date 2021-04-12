const Joi = require('joi')
 
export const bodySchema = Joi.object({
  login: Joi.string().required(),
  age: Joi.number().min(4).max(130).required(),
  password: Joi.string().pattern(new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')).required(),
})
 