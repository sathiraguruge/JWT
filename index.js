// Import the required dependencies
const express = require("express");
const mongoose = require("mongoose");

// Create an instance of Express.
const app = express();

// Import the routes for the application and set them up on the app instance.
require("./startup/routes")(app);

// Connect to MongoDB using mongoose
mongoose
  .connect("mongodb://0.0.0.0/jwt", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Set up the port for the application to listen on.
const port = process.env.PORT || 3001;

// Start the server listening on the specified port.
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);
