import { Router } from "express";
import {
  loginUser,
  registerUser,
  newAccessToken,
  logOutUser,
  loginDetail,
} from "../Controller/user.controller.js";
import { authenticate } from "../Middleweares/authenticate.middleware.js";
const router = Router();

router.route("/registerUser").post(registerUser);
router.route("/loginUser").post(loginUser);
router.route("/refreshToken").post(newAccessToken);
router.route("/logoutUser").post(logOutUser);
router.route("/logindetail").get(authenticate, loginDetail);

export default router;
