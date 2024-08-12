import { Router } from "express";
import { renderHome } from "./home.controller.js";

const homeRouter = Router();
homeRouter.route("/").get(renderHome);
export default homeRouter;
