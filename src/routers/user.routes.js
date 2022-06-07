import { Router } from "express"

import tokenAuthorizationMw from "../middlewares/tokenAuthorization.mw";
import adminAuthorizationMw from "../middlewares/adminAuthorization.mw";
import checkIfUserExistsMw from "../middlewares/checkIfUserExists.mw";

import { 
   createUserCtrl,
   getAllUsersCtrl,
   getUserCtrl,
   deleteUserCtrl,
   editUserCtrl } from "../controllers/user.ctrl"

const router = Router()

router.get("", tokenAuthorizationMw, adminAuthorizationMw, getAllUsersCtrl)
router.get("/profile", tokenAuthorizationMw, getUserCtrl )
router.post("", createUserCtrl )
router.patch("/:id", tokenAuthorizationMw, checkIfUserExistsMw, editUserCtrl)
router.delete("/:id", tokenAuthorizationMw, checkIfUserExistsMw, deleteUserCtrl)

export default router