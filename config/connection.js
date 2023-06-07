const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    "cyu680aj3dopzf69",
    "ghnbd4q0e4qhzg91",
    "jnr529nag7t327e1",
    {
      host: "co28d739i4m2sb7j.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
