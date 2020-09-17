import { Router } from "express";
import * as authController from "../../controllers/auth.controller";
const router = Router();

router.post("/signup", authController.SignUp);

router.post("/signin", authController.SignIn);
export default router;
