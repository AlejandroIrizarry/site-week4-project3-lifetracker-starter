express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = require("./app");
const { PORT } = require("./config");
const { BadRequestError, NotFoundError } = require("./utils/errors");
// routes
const authRoutes = require("./routes/auth");
const security = require("./middleware/security");
const nutritionRoutes = require("./routes/nutrition");
const activityRoutes = require("./routes/activity");

// Enable CORS middleware to handle cross-origin requests
app.use(cors());

// Use Morgan middleware for request logging
app.use(morgan("tiny"));

// Parse incoming requests with JSON payloads
app.use(express.json());

//check if a token exists in the auth header, if it does, attach the decoded user to res.locals
app.use(security.extractUserFromJwt);

// set up routes for auth/app functionality
app.use("/auth", authRoutes);

// set up routes for nutrition section
app.use("/nutrition", nutritionRoutes);

// set up routes for activity section
app.use("/activity", activityRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

//setting up port
app.listen(PORT, () => {
  console.log(`🧨 Server listening on port ${PORT}`);
});
