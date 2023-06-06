const path = require("path");
const express = require("express");
const session = require("express-session");
const expressHandlebars = require("express-handlebars");
const routes = require("./controllers/routes.js");

//recreated the helpers file for any future embedded logic we need
const helper = require("./utils/helpers.js");
const mysql = require("mysql");
const sequelize = require("./config/connection");

//get express instantiated
const app = express();
const PORT = process.env.PORT || 3001;

//adds in the helpers
const handleEnv = expressHandlebars.create({ helper });
app.use(express.static("views"));

//sets the render engine to handlebars
app.engine("handlebars", handleEnv.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, "public")));

//adds in the routing on default to go to the routes page
app.use("/", routes);

//app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("server online"));
});
