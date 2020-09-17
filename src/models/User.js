import Joi from "joi";

const UserSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),

  password: Joi.string().required(),

  access_token: [Joi.string(), Joi.number()],

  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required(),
});

export default UserSchema;
