const router = require("express").Router();
const path = require("path");

router.get("/home", async (req, res) => {
  res.send("not implemented index.html");
});
router.get("/activism", async (req, res) => {
  res.send("hello from the activism page");
});
router.get("/friendlyspaces", async (req, res) => {
  res.send("hello from the friendlyspaces");
});

module.exports = router;
