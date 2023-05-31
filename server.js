const path = require("path");
const express = require("express");
const expressHandlebars = require("express-handlebars");
//const routes = require("./controllers");
//const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const handlebars = expressHandlebars.create({});

// Inform Express.js which template engine we're using
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//app.use(routes);

//sequelize.sync({ force: false }).then(() => {
// app.listen(PORT, () => console.log("Now listening"));
//});
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
