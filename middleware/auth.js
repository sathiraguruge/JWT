// Import the required dependencies
const jwt = require("jsonwebtoken");
const { decodeToken } = require("../service/tokenService");

// Export middleware function to handle authentication
module.exports = function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided");

  try {
    // Decode the token and set the decoded data to the req.user property
    const decoded = decodeToken(token);

    // If the decoded payload's isAdmin is set to true allow else deny the request
    if (decoded.isAdmin) next();
    else return res.status(401).send("Access denied. Not an admin");
  } catch (err) {
    // Handle error for invalid token
    return res.status(400).send("Invalid token");
  }
};
