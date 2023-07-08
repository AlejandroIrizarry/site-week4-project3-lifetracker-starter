const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Nutrition = require("../models/nutrition");
const security = require("../middleware/security");
const { authedUserIsNutritionOwner } = require("../middleware/permissions");

router.post("/create", security.verifyAuthUser, async (req, res, next) => {
  try {
    const { email } = res.locals.user;

    const user = await User.fetchUserByEmail(email);
    // store new nutrition data
    const nutritionData = req.body;

    // create nutrition entry
    await Nutrition.create(user.email, nutritionData);

    // fetch again all the nutritions
    const nutritions = await Nutrition.fetch(email);

    return res.status(201).json({
      nutritions,
    });
  } catch (error) {
    next(error);
  }
});

router.get(
  "/id/:id",
  security.verifyAuthUser,
  authedUserIsNutritionOwner,
  async (req, res, next) => {
    try {
      const id = req.params.id;

      const nutrition = await Nutrition.fetchById(id);

      return res.status(200).json({
        ...nutrition,
      });
    } catch (error) {
      next(error);
    }
  }
);

// retrieves nutritions
router.get("/", security.verifyAuthUser, async (req, res, next) => {
  try {
    const { email } = res.locals.user;

    const nutritions = await Nutrition.fetch(email);

    return res.status(200).json({
      nutritions,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
