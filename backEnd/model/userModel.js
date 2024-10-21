const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Đảm bảo username là duy nhất
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Đảm bảo email là duy nhất
      validate: {
        isEmail: true, // Kiểm tra email hợp lệ
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    tableName: "users", // Tên bảng trong database
    timestamps: true, // Thêm trường createdAt và updatedAt tự động
  }
);
module.exports = User;
