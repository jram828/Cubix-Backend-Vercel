import { Router } from "express";
import getGameRouter from "./getGameRoute.js"
// import twilioRouter from "./twilioRoutes.js";
import deleteUserRouter from "./deleteUserRouter.js"
import { router as userRouter } from "./userRoutes.js"
import twilio from "twilio";
import { envs } from "../config/enviroments/enviroments.js";

const router = Router();

router.use("/getGame", getGameRouter);
router.use("/verifyuser/sendOTP/:phoneNumber", async (phoneNumber) => {

    console.log("Phone number", phoneNumber);
     
    console.log(
      "Datos Twilio:",
      envs.ACCOUNTSID,
      envs.AUTHTOKEN,
      envs.SERVICESID
    );
    try {
  
          const client = new twilio(envs.ACCOUNTSID, envs.AUTHTOKEN);
      
      const { status } = await client.verify.v2
        .services(envs.SERVICESID)
        .verifications.create({
          to: phoneNumber,
          channel: "sms",
        });
     
      console.log('sTATUS:', status)
  
      return status;
    } catch (error) {
      return error;
    }
  });
router.use("/deleteAccount", deleteUserRouter);
router.use("/users", userRouter)
router.use("/", (req, res)=>{res.send("Server is running.")} )


export default router

