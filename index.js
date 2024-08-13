import express from "express";
import "dotenv/config";
import { dbConnection } from "./database/dbConnection.js";
import homeRouter from "./src/modules/home/home.routes.js";
import loginRouter from "./src/modules/login/login.routes.js";
import registerRouter from "./src/modules/register/register.routes.js";
import messageRouter from "./src/modules/message/message.routes.js";
import userRouter from "./src/modules/user/user.routes.js";
import session from "express-session";
import mongoSession from "connect-mongodb-session";
import cors from "cors";
import * as path from "path";
const app = express();
app.use(cors());
let mongoDBStore = mongoSession(session);
let store = new mongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "mySessions",
});
app.use(
  session({
    secret: "keyboard input",
    saveUninitialized: true,
    resave: false,
    store: store,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
app.set("views", path.join(path.resolve(), "/views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(path.resolve(), "public")));
const port = process.env.PORT || 3000;
app.use(homeRouter);
app.use(loginRouter);
app.use(registerRouter);
app.use(messageRouter);
app.use(userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
