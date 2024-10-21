const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgreSQL_connect_vue",
  "longtimenose3",
  "123456",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Authentication successful"))
  .catch((err) => console.log("Error: " + err));

module.exports = sequelize;
