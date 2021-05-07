const { query } = require("express");
const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {

  let selectedMeals = meals;


  if ('maxPrice' in request.query) {
    const maxPrice = parseFloat(request.query.maxPrice)

    if (isNaN(maxPrice)) {
      response.status(400).json({ error: "maxPrice must be an integer" })
      return
    }

    selectedMeals = selectedMeals.filter((mealPrice) => mealPrice.price < maxPrice);
  }


  if ('title' in request.query) {
    const title = request.query.title

    if (!title) {
      response.status(400).json({ error: "title is wrong" })
      return
    }
    selectedMeals = selectedMeals.filter((mealTitle) => mealTitle.title.toLowerCase().includes(title.toLowerCase()));
  }


  if ('createdAfter' in request.query) {
    const createdAfter = new Date(request.query.createdAfter)

    if (!createdAfter.getDate()) {
      response.status(400).json({ error: "created date is not a valid date" })
      return
    }

    selectedMeals = selectedMeals.filter((meal) => new Date(meal.createdAt) > createdAfter);
  }


  if ('limit' in request.query) {
    const limit = Number(request.query.limit)

    if (isNaN(limit)) {
      response.status(400).json({ error: "it's a wrong command" })
      return
    }

    selectedMeals = selectedMeals.slice(0, limit)
  }


  response.json(selectedMeals)

});



router.get("/:id", async (request, response) => {
  const mealId = parseInt(request.params.id)
  if (mealId <= meals.length) {
    const bringId = meals.find((meal) => meal.id == mealId);
    response.send(bringId)
  } else if (isNaN(mealId)) {
    response.status(400).send({ Error: "Meal is not found" })
  } else {
    response.send()
  }

});



module.exports = router;
