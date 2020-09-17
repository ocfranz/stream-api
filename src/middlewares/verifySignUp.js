import db from "../db";

const Users = db.get("users");

const checkUsernameOrEmailExists = async (req, res, next) => {
  try {
    const { username, email } = req.body;
    const user = await Users.findOne({ username });
    if (user)
      return res.status(400).json({ message: "The username already exists" });
    const userByEmail = await Users.findOne({ email });
    if (userByEmail)
      return res.status(400).json({ message: "The email already exists" });
    next();
  } catch (error) {}
};

export { checkUsernameOrEmailExists };
