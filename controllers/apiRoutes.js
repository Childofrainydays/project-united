const router = require("express").Router();
const activism = require("../db/Activism.json");
const friendlySpaces = require("../db/FriendlySpaces.json");

router.get("/activism", async (req, res) => {
  res.json(activism);
});
router.get("/friendlyspaces", async (req, res) => {
  res.json(friendlySpaces);
});

module.exports = router;
