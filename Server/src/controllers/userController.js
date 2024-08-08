import axios from "axios";
import { envs } from "../config/enviroments/enviroments.js";
import { UserService } from "../services/user.service.js";
import { validateWitchHabanero } from "./authController.js";

const userService = new UserService();
export const registerUser = async (username, password) => {
  const payload = {
    BrandId: envs.BRANDID,
    APIKey: envs.APIKEY,
    Username: username,
    Password: password,
    CurrencyCode: "EUR",
  };
  console.log("payload:", payload);

  try {
    const response = await axios.post(
      `${envs.HABANERO_API_URL}/LoginOrCreatePlayer`,
      payload
    );

    if (response.data.Authenticated) {
      return {
        success: true,
        message: "User created correctly in Habanero",
        habaneroData: response.data,
      };
    } else {
      throw new Error("Failed to authenticate user in Habanero");
    }
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
};

export const getAllUser = async (req, res) => {
  const users = await userService.findAll();
  console.log("users", users);
  return res.status(200).json(users);
};

export const deletedUser = async (req, res) => {
  const { id } = req.params;
  console.log('Id delete controller:',id)
  const user = await userService.findOneById(id);

  if (!user) {
    return new Error("User is not found.", 404);
  }

  await userService.deleteUser(user);

  return res.status(200).json(`User id: ${id}: delete succes`);
};

export const findOneUser = async (req, res) => {
  const { id } = req.params;

  const user = await userService.findOneById(id);

  if (!user) {
    return new Error("User is not found.", 404);
  }

  return res.status(200).json(user);
};

export const validateEmail = async (email) => {
  const user = await userService.findByEmail(email);

  // if (!user) {
  //   throw new Error("User not found");
  // } else {
  //   const habaneroResponse = await validateWitchHabanero(
  //     user.username,
  //     password
  //   );

  //   if (!habaneroResponse) {
  //     throw new Error(habaneroResponse.message, 404);
  //   }
  // }

  return user;
    // habaneroData: habaneroResponse.data,
  
};
