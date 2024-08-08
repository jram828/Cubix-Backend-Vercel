import express from "express";
import { registerUserHandler } from "../handlers/userHandler.js";
import { authHandler } from "../handlers/authhandler.js";
import recoveryPasswordHandler from "../handlers/postPasswordRecoveryHandler.js";
import {
  findOneUser,
  getAllUser,
} from "../controllers/userController.js";
import {verifyEmailHandler } from "../handlers/emailHandler.js";

export const router = express.Router();

router.get("/", getAllUser);
// router.route("/:id").delete(deleteUser).get(findOneUser);

router.post("/register", registerUserHandler);
router.post("/validate-user", authHandler);
router.post("/recovery-password", recoveryPasswordHandler);
router.post("/verify-email", verifyEmailHandler);