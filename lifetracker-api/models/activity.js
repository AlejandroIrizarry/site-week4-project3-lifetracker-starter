const db = require("../db");

class Activity {
  // fetch a query averaging data
  static async get(email) {
    const queryAverage = `SELECT AVG(calories) AS calories, category FROM nutrition WHERE user_email=$1 GROUP BY category LIMIT 6;`;

    const resultAverage = await db.query(queryAverage, [email]);

    const queryMax = `
        SELECT MAX(calories) 
        AS calories
        FROM nutrition 
        WHERE user_email=$1`;

    const resultMax = await db.query(queryMax, [email]);

    console.log(resultMax);
    return {
      avgCaloriesPerCategory: resultAverage.rows[0] || 0,
      maxCaloriesPerMeal: resultMax.rows[0] || 0,
    };
  }
}

module.exports = Activity;
