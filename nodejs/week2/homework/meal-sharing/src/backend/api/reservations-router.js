const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
    response.json(reservations)
});

router.get("/:id", async (request, response) => {
    const reservationId = parseInt(request.params.id)
    const resId = reservations.find((reservation) => reservation.id == reservationId);
    response.send(resId)
});

module.exports = router;