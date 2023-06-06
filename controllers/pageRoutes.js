const router = require("express").Router();
const path = require("path");
const { Activism, Friendly_Spaces, Articles } = require("../models");

router.get("/home", async (req, res) => {
  try {
    res.render("homepage", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

//Activism sending over the correct Sequelize data
router.get("/activism", async (req, res) => {
  try {
    const activismData = await Activism.findAll({
      include: [],
    });
    const activismMap = activismData.map((activism) =>
      activism.get({ plain: true })
    );
    res.render("activism", {
      activismMap,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Friendly spaces sending over the correct Sequelize data
router.get("/friendlyspaces", async (req, res) => {
  try {
    const friendlyData = await Friendly_Spaces.findAll();
    const friendlyMap = friendlyData.map((friendly) =>
      friendly.get({ plain: true })
    );
    res.render("friendlyspaces", {
      friendlyMap,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/news", async (req, res) => {
  try {
    const newsData = await Articles.findAll();
    const newsMap = newsData.map((news) => news.get({ plain: true }));
    res.render("news", {
      newsMap,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
