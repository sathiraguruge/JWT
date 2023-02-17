// Import the required dependencies
const express = require("express");
const router = express.Router();
const { generateAuthToken } = require("../service/tokenService");

// Define the route handler to generate a JWT token with the given isAdmin flag
router.post("/", async (req, res) => {
  let token;
  if (req.body.isAdmin) {
    token = generateAuthToken(true);
  } else {
    token = generateAuthToken(false);
  }

  // Set the generated token in the response header and send the response
  return res.status(200).header("x-auth-token", token).send(200);
});

module.exports = router;
