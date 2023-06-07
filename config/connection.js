const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    "opuph324pl23iqj4",
    "ngxmpkd352prknur",
    "kv2n01cppbfgmiok",
    {
      host: "co28d739i4m2sb7j.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
