const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");


// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

const allMealReviews = meals.map((eachMeal) => {
  eachMeal.reviews = [];
  reviews.filter((review) => {
    if (review.mealId === eachMeal.id) {
      eachMeal.reviews.push(review);
    }
  })
  return eachMeal;
})

app.get("/meals", async (request, response) => {
  response.send(allMealReviews);
});

app.get("/cheap-meals", async (request, response) => {
  const cheapMeals = allMealReviews.filter((review) => review.price < 80)
  response.send(cheapMeals);
});

app.get("/large-meals", async (request, response) => {
  const largeMeals = allMealReviews.filter((people) => people.maxNumberOfGuests < 4)
  response.send(largeMeals);
});

app.get("/meal", async (request, response) => {
  const randomMeal = allMealReviews[Math.floor(Math.random() * allMealReviews.length)]
  response.send(randomMeal);
});

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

app.get("/reservation", async (request, response) => {
  const reservation = reservations[Math.floor(Math.random() * reservations.length)]
  response.send(reservation);
});




module.exports = app;
