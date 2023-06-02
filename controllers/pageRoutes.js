const router = require("express").Router();
const path = require("path");

router.get("/home", async (req, res) => {
  try {
    res.render("homepage", {});
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.get("/activism", async (req, res) => {
//   res.send("hello from the activism page");
// });
// router.get("/friendlyspaces", async (req, res) => {
//   res.send("hello from the friendlyspaces");
// });

module.exports = router;
