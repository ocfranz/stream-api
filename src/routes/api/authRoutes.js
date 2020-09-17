import { Router } from "express";
import * as authController from "../../controllers/auth.controller";
import { checkUsernameOrEmailExists } from "../../middlewares/verifySignUp";
const router = Router();

router.post("/signup", [checkUsernameOrEmailExists], authController.SignUp);

router.post("/signin", authController.SignIn);

export default router;
