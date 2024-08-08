import axios from "axios";
import { envs } from "../config/enviroments/enviroments.js";
import { UserService } from "../services/user.service.js";
import { verifyPassword } from "../config/middleware/encrypted.pasword.js";

const userService = new UserService();

export const validateWitchHabanero = async (username, password) => {
  const payload = {
    BrandId: envs.BRANDID,
    APIKey: envs.APIKEY,
    Username: username,
    Password: password,
  };

  try {
    const response = await axios.post(
      `${envs.HABANERO_API_URL}/QueryPlayer`,
      payload
    );

    if (response.data.Found) {
      return {
        success: true,
        data: response.data,
      };
    } else {
      return {
        success: false,
        data: "Invalid Credentials",
      };
    }
  } catch (error) {
    console.log("Error validating with Habanero", error.message);
    return {
      success: false,
      message: "Error validating with Habanero",
    };
  }
};

export const validateUser = async (username, password) => {
  const user = await userService.findOneByUserName(username);

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await verifyPassword(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid password", 404);
  }

  const habaneroResponse = await validateWitchHabanero(username, password);

  if (!habaneroResponse) {
    throw new Error(habaneroResponse.message, 404);
  }

  return {
    user,
    habaneroData: habaneroResponse.data,
  };
};
