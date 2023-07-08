const express = require("express");
const Nutrition = require("../models/nutrition");
const { ForbiddenError } = require("../utils/errors");

const router = express.Router();

const authedUserIsNutritionOwner = async (req, res, next) => {
  try {
    const { user } = res.locals;

    const id = req.params.id;

    const nutrition = await Nutrition.fetchById(id);

    if (nutrition.userEmail !== user.email) {
      throw new ForbiddenError(
        "Permission error: You are not authorized to see this nutrition item!"
      );
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  authedUserIsNutritionOwner,
};
