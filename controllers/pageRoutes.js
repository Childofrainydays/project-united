const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("hello from the other side");
});

module.exports = router;
