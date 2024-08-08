import bcrypt from "bcrypt";
import { envs } from "../enviroments/enviroments.js";

export const encryptedPassword = async (password) => {
  const salt = await bcrypt.genSalt(envs.SALT_BCRYPT);
  return await bcrypt.hash(password, salt);
};

export const verifyPassword = async (bodyPassword, userPassword) => {
  return await bcrypt.compare(bodyPassword, userPassword);
};
