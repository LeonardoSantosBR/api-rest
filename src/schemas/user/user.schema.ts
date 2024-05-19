import Joi from "joi";

const CreateUserSchema = Joi.object({
  idPlan: Joi.string().required().messages({
    "any.required": "É necessário enviar o plano.",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "É necessário enviar o email.",
    "string.email": "Email inválido.",
  }),
  cpf: Joi.string().required().messages({
    "any.required": "É necessário enviar o cpf.",
  }),
  name: Joi.string().required().messages({
    "any.required": "É necessário enviar o nome.",
  }),
  password: Joi.string().required().messages({
    "any.required": "É necessário enviar a senha.",
  }),
});

const UpdateUserSchema = Joi.object({
  idPlan: Joi.string().optional().messages({
    "any.required": "É necessário enviar o plano.",
  }),
  email: Joi.string().email().optional().messages({
    "any.required": "É necessário enviar o email.",
    "string.email": "Email inválido.",
  }),
  cpf: Joi.string().optional().messages({
    "any.required": "É necessário enviar o cpf.",
  }),
  name: Joi.string().optional().messages({
    "any.required": "É necessário enviar o nome.",
  }),
  password: Joi.string().optional().messages({
    "any.required": "É necessário enviar a senha.",
  }),
});

export { CreateUserSchema, UpdateUserSchema };
