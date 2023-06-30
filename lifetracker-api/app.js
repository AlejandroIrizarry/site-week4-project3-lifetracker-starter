"use strict";

/** Express app for Lifetracker */

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { NotFoundError } = require("./utils/errors");
const config = require("./config");
const app = express();
const security = require("./middleware/security");
app.use(security.extractUserFromJwt);
const authRoutes = require("./routes/auth");

// Enable CORS middleware to handle cross-origin requests
app.use(cors());

// Use Morgan middleware for request logging
app.use(morgan("tiny"));

// Parse incoming requests with JSON payloads
app.use(express.json());

app.use("/auth", authRoutes);

//test GET request
app.get("/", (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (!config.IS_TESTING) console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
