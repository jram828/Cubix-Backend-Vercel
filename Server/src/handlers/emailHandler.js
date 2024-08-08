import { sendEmailPassword} from "../controllers/emailNotifier.js";
import { validateEmail } from "../controllers/userController.js";
import { validateEmailData } from "../validates/emailVerification.js";


const verifyEmailHandler = async (req, res) => {
  const { email } = req.body;
  
  // const redirectUrl = "http://localhost:5173/recovery";
  
  

  try {

    const { data, error } = validateEmailData({ email: email});
    // console.log("data verificacion:", data);

    let {dataValues} = await validateEmail(email) 

    // console.log('user validate email:',dataValues)
    // console.log("Datos email:", user.dataValues, email);
    if (error) {
      return res
      .status(400)
      .json({ status: "error", message: error.map((e) => e.message) });
    } else {
      const redirectUrl = `https://cubixtest.vercel.app/recovery?username=${dataValues.username}`;
    
      await sendEmailPassword(dataValues.username, email, redirectUrl);
      res.status(200).json("Email was sent successfully.");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};


export { verifyEmailHandler };
