import { registerUser } from "../controllers/userController.js";
import { UserService } from "../services/user.service.js";
import { parseUserData } from "../validates/userValidates.js";

const userService = new UserService();

export const registerUserHandler = async (req, res) => {
  try {
    const { data, error } = parseUserData(req.body);

    if (error) {
      return res.status(422).json({
        status: "Error",
        message: error.map((error) => error.message),
      });
    }
    console.log('data register:',data)
    const newUser = await userService.createUser(data);

    const habaneroResponse = await registerUser(data.username, data.password);

    return res.status(201).json({
      localUser: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        birthdate: newUser.birthdate,
        phoneNumber: newUser.phoneNumber,
      },
      habaneroResponse,
    });
  } catch (error) {
    console.error("Error processing request:", error.message);
    return res.status(500).json({ status: "Error", message: error.message });
  }
};
