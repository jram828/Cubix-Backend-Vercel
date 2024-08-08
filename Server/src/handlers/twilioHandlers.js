import { sendOTP, verifyOTP } from "../controllers/twilioControllers.js";
import { validateOTP, validatePhone } from "../validates/twilioVerification.js";
const sendOTPHandler = async (req, res) => {
  const { phoneNumber } = req.params;
  console.log("Phone number handler:", phoneNumber);
  try {
    const { data, error } = validatePhone({ phoneNumber: phoneNumber });

    if (error) {
      return res
        .status(400)
        .json({ status: "error", message: error.map((e) => e.message) });
    }
    console.log("data verificacion:", data);
    const response = await sendOTP(data.phoneNumber);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const verifyOTPHandler = async (req, res) => {
  try {
    const { data, error } = validateOTP(req.body);

    console.log('data:',data,"error:", error)
    if (error) {
      return res
        .status(400)
        .json({
          status: "error",
          message: error.map((error) => error),
        });
    }

    
    console.log("data verificacion OTP:", data);
    const response = await verifyOTP(data);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

export { sendOTPHandler, verifyOTPHandler };
