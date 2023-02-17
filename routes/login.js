const express = require("express");
const router = express.Router();
const { generateAuthToken } = require("../service/tokenService");

router.post("/", async (req, res) => {
  let token;
  if (req.body.isAdmin) {
    token = generateAuthToken(true);
  } else {
    token = generateAuthToken(false);
  }
  return res.status(200).header("x-auth-token", token).send(200);
});

module.exports = router;
