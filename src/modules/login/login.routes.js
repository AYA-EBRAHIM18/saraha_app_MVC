import { Router } from "express";
import { logIn, handleLogin } from "./login.controller.js";

const loginRouter = Router();
loginRouter.get("/login", logIn);
loginRouter.post("/handleLogin", handleLogin);

export default loginRouter;
