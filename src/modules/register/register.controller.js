import { User } from "../../../database/models/user.model.js";

const register = async (req, res) => {
  res.render("register.ejs", { error: req.query.error, session: null });
};

const handleRegister = async (req, res) => {
  let isUser = await User.findOne({ email: req.body.email });
  if (isUser) return res.redirect("/register?error=email already exists.");
  let user = new User(req.body);
  await user.save();
  res.redirect("/login");
};
export { register, handleRegister };
