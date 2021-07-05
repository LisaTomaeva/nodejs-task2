import Joi from 'joi';
 
export const userBodySchema = Joi.object({
  login: Joi.string().pattern(new RegExp('[A-Za-z]')).required(),
  age: Joi.number().min(4).max(130).required(),
  password: Joi.string().pattern(new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')).required()
})

export const groupBodySchema = Joi.object({
  groupName: Joi.string().pattern(new RegExp('[A-Za-z]')).required(),
  roles: Joi.array().items(Joi.string().pattern(new RegExp('[A-Za-z]'))).required()
})
 