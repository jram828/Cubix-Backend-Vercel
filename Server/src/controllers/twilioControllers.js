import twilio from "twilio";
import { envs } from "../config/enviroments/enviroments.js";

const sendOTP = async (phoneNumber) => {

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
};

const verifyOTP = async (data) => {
  console.log("Phone number", data.phoneNumber, 'OTP controller: ', data.OTP);

  try {

    const client = new twilio(envs.ACCOUNTSID,envs.AUTHTOKEN);
    
    const { status } = await client.verify.v2
      .services(envs.SERVICESID)
      .verificationChecks.create({
        to: data.phoneNumber,
        code: data.OTP,
      });

    console.log("sTATUS:", status);

    return status;
  } catch (error) {
    return error;
  }
};

export { sendOTP, verifyOTP };
