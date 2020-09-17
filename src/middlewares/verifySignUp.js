import User from '../models/User'

const checkUsernameOrEmailExists = async (req, res, next) => {
  try {
    const { username, email } = req.body;
    const user = await User.findOne({ username });
    if (user)
      return res.status(400).json({ message: "The username already exists" });
    const userByEmail = await User.findOne({ email });
    if (userByEmail)
      return res.status(400).json({ message: "The email already exists" });
    next();
  } catch (error) {}
};

export { checkUsernameOrEmailExists };
