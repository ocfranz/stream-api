import db from "../db";
const Users = db.get("users");

export const SignUp = async (req, res, next) => {

  const items = await Users.find({});
  res.json(items);
};

export const SignIn = async (req, res, next) => {
  console.log("sign ing");
};
