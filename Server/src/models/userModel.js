import { DataTypes } from "sequelize";
import { sequelize } from "../../DB.js";
import { encryptedPassword } from "../config/middleware/encrypted.pasword.js";

const User = sequelize.define(
  "users",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      allowNull: true,
      type: DataTypes.DATEONLY,
    },
    phoneNumber: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: false,
    },
    role: {
      type: DataTypes.ENUM("player", "admin"),
      allowNull: false,
      defaultValue: "player",
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    // hooks: {
    //   beforeCreate: async (user) => {
    //     user.password = await encryptedPassword(user.password);
    //   },
    // },
  }
);

export default User;
