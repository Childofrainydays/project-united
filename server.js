const path = require("path");
const express = require("express");
const session = require("express-session");
const expressHandlebars = require("express-handlebars");
const routes = require("./controllers/routes.js");

//recreated the helpers file for any future embedded logic we need
const helper = require("./utils/helpers.js");

const mysql = require("mysql");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const handleEnv = expressHandlebars.create({ helper });

app.engine("handlebars", handleEnv.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log("Now listening"));
// });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("server online"));
});
