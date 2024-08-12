import session from "express-session";
import { User } from "../../../database/models/user.model.js";

const logIn = async (req, res) => {
  res.render("login.ejs", { error: req.query.error, session: null });
};
const handleLogin = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user || !user.password == req.body.password)
    return res.redirect("/login?error=incorrect email or password");
  req.session.userId = user._id;
  req.session.name = user.name;
  req.session.isLoggedIn = true;

  res.redirect("/messages");
};

export { logIn, handleLogin };
