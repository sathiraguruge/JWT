// Import the required dependencies
const jwt = require("jsonwebtoken");

// Define the private key used for signing the JWT
const JWT_PRIVATE_KEY = "DEMO123";

// Generate a JWT token with the given payload and the private key
generateAuthToken = function (isAdmin) {
  const token = jwt.sign({ isAdmin }, JWT_PRIVATE_KEY);
  return token;
};

// Verify and decode the given JWT token with the private key
decodeToken = function (token) {
  return jwt.verify(token, JWT_PRIVATE_KEY);
};

// Export the functions for external use
module.exports = { generateAuthToken, decodeToken };
