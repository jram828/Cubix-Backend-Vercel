import { Router } from "express";
import getGameRouter from "./getGameRoute.js"
import twilioRouter from "./twilioRoutes.js";
import deleteUserRouter from "./deleteUserRouter.js"
import { router as userRouter } from "./userRoutes.js"

const router = Router();

router.use("/getGame", getGameRouter);
router.use("/verifyuser", twilioRouter);
router.use("/deleteAccount", deleteUserRouter);
router.use("/users", userRouter)


export default router

