import { Message } from "../../../database/models/message.model.js";
import { User } from "../../../database/models/user.model.js";

const user = async (req, res) => {
  let user = await User.findById(req.params.id);
  res.render("user.ejs", {
    userId: req.params.id,
    name: user.name,
    session: null,
  });
};

const sendMsg = async (req, res) => {
  req.body.user = req.params.id;
  await Message.insertMany(req.body);
  res.redirect("/user/" + req.params.id);
};
const logout = async (req, res) => {
  req.session.destroy(function (err) {
    res.redirect("/login");
  });
};
export { user, sendMsg, logout };
