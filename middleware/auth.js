const jwt = require("jsonwebtoken");
const { decodeToken } = require("../service/tokenService");

module.exports = function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided");

  try {
    const decoded = decodeToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(400).send("Invalid token");
  }
};
