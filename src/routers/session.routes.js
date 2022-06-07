import { Router } from "express";
import { userLoginCtrl } from "../controllers/auth.ctrl";

const sessionRouter = Router();

sessionRouter.post("", userLoginCtrl );

export default sessionRouter;
