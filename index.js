const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("./startup/routes")(app);

// Connect to MongoDB
mongoose
  .connect("mongodb://0.0.0.0/jwt", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3001;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);
