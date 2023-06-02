const router = require("express").Router();
const path = require("path");

router.get("/home", async (req, res) => {
  try {
    res.render("homepage", {});
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/activism", async (req, res) => {
  try {
    res.render("activism", {});
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
