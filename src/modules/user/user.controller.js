import { Message } from "../../../database/models/message.model.js";

const user = async (req, res) => {
  res.render("user.ejs", { userId: req.params.id, session: null });
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
