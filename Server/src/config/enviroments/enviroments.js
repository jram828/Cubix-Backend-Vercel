import "dotenv/config";

import env from "env-var";

export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  DB_URI: env.get("DB_URI").required().asString(),
  HABANERO_API_URL: env.get("HABANERO_API_URL").required().asString(),
  SALT_BCRYPT: env.get("SALT_BCRYPT").required().asPortNumber(),
  ACCOUNTSID: env.get("ACCOUNTSID").required().asString(),
  AUTHTOKEN: env.get("AUTHTOKEN").required().asString(),
  SERVICESID: env.get("SERVICESID").required().asString(),
  BRANDID: env.get("BRANDID").required().asString(),
  APIKEY: env.get("APIKEY").required().asString(),
  EMAIL: env.get("EMAIL").required().asString(),
  EMAIL_PASSWORD: env.get("EMAIL_PASSWORD").required().asString(),
};
