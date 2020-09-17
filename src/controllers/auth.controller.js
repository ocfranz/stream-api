import db from "../db";
import userScheme from "../models/User";

const Users = db.get("users");

export const SignUp = async (req, res, next) => {
  try {
    const item = await userScheme.validateAsync(req.body);
    const inserted = await Users.insert(item);
    res.status(200).json(inserted);
  } catch (error) {
    next(error);
  }
};

export const SignIn = async (req, res, next) => {
  console.log("sign ing");
};
