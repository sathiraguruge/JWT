const jwt = require("jsonwebtoken");
const JWT_PRIVATE_KEY = "DEMO123";

generateAuthToken = function (isAdmin) {
  const token = jwt.sign({ isAdmin }, JWT_PRIVATE_KEY);
  return token;
};

decodeToken = function (token) {
  return jwt.verify(token, JWT_PRIVATE_KEY);
};

module.exports.generateAuthToken = generateAuthToken;
module.exports.decodeToken = decodeToken;
