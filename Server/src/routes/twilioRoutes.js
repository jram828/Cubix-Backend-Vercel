import { Router } from "express";
import { sendOTPHandler, verifyOTPHandler } from "../handlers/twilioHandlers.js";

const twilioRouter = Router();

twilioRouter.post("/sendOTP/:phoneNumber", sendOTPHandler);
twilioRouter.post("/verifyOTP", verifyOTPHandler);

export default twilioRouter;
