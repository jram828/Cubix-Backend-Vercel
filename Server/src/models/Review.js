import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Review = sequelize.define("Review", {
    reviewId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.INTEGER,
    },
    score: {
      type: DataTypes.ENUM("1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5"),
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return Review;

};

