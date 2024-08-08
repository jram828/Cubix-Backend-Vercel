import { validateUser } from "../controllers/authController.js";
import { parseLoginData } from "../validates/userValidates.js";
export const authHandler = async (req, res) => {
  const { data, error } = parseLoginData(req.body);

  if (error) {
    return res.status(422).json({
      status: "Error",
      message: error.map((error) => error.message),
    });
  }
  try {
    const { habaneroData, user } = await validateUser(
      data.username,
      data.password
    );

    return res.status(200).json({
      status: true,
      message: "User validated successfully",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        phoneNumber:user.phoneNumber
      },
      habaneroData,
    });
  } catch (error) {
    console.error("Error validating user:", error.message);
    return res.status(400).json({ message: error.message });
  }
};
