import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";

export const SignUp = async (req, res, next) => {
  try {
    const { password } = req.body;
    const item = await User.joiValidate(req.body);
    if (item.error)
      return res
        .status(400)
        .json({ message: "Invalid request", detail: item.details[0].message });
    const newUser = new User({
      ...item,
      password: await User.hashPassword(password),
    });
    const storedUser = await newUser.save();
    const token = jwt.sign({ id: storedUser._id }, config.SECRET, {
      expiresIn: 86400,
    });
    res.status(200).json({ token: token });
  } catch (error) {
    next(error);
  }
};

export const SignIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;
  } catch (error) {
    next(error);
  }
};
