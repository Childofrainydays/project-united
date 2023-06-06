const sequelize = require("../config/connection");
const { Friendly_Spaces, Activism, Articles } = require("../models");

const activismData = require("./Activism.json");
const friendlySpacesData = require("./FriendlySpaces.json");
const articlesData = require("./Articles.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Activism.bulkCreate(activismData, {
    individualHooks: true,
    returning: true,
  });

  await Friendly_Spaces.bulkCreate(friendlySpacesData, {
    individualHooks: true,
    returning: true,
  });

  await Articles.bulkCreate(articlesData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
