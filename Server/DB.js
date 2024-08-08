import { Sequelize } from "sequelize";
import { envs } from "./src/config/enviroments/enviroments.js";


const sequelize = new Sequelize(envs.DB_URI, {
  logging: false,
  native: false,
  dialectOptions: envs.DB_USE_SSL === 'true' ? {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Esto puede ser necesario si estás usando certificados autofirmados
    },
  } : {},
});

const models = {
  ...sequelize.models,
  conn: sequelize,
};

export { models, sequelize };