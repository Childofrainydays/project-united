const router = require("express").Router();
const path = require("path");
const { Activism, FriendlySpaces } = require("../models");

router.get("/home", async (req, res) => {
  try {
    res.render("homepage", {});
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/activism", async (req, res) => {
  try {
    const activismData = await Activism.findAll();
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
router.get("/friendlyspaces", async (req, res) => {
  try {
    res.render("friendlyspaces", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
