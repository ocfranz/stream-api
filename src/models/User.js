import Joi from "joi";
import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, unique: true },
    password: { type: String },
    email: { type: String, unique: true },
    access_token: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.statics.joiValidate = async (obj) => {
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
      })
      .required(),
  });

  try {
    const item = await schema.validateAsync(obj);
    return item;
  } catch (error) {
    return { error: true, ...error };
  }
};

userSchema.statics.hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (foundPassword, password) => {
  return await bcrypt.compare(foundPassword, password);
};

export default model("users", userSchema);
