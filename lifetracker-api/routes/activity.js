// model import
const Activity = require("../models/activity");

const security = require("../middleware/security");
const express = require("express");
const router = express.Router();

router.get("/", security.verifyAuthUser, async (req, res, next) => {
  try {
    const { email } = res.locals.user;
    const result = await Activity.get(email);
    return res.status(200).json({ activity: result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
