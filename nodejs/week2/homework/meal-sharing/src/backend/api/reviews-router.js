const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");


router.get("/", async (request, response) => {
    response.json(reviews)
});

router.get("/:id", async (request, response) => {
    const reviewId = parseInt(request.params.id)

    const revId = reviews.find((review) => review.id === reviewId);
    response.send(revId)


});

module.exports = router;
