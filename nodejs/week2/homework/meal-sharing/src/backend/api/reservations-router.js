const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
    response.json(reservations)
});

router.get("/:id", async (request, response) => {
    const reservationId = parseInt(request.params.id)
    if (reservationId <= reservations.length) {
        const resId = reservations.find((reservation) => reservation.id == reservationId);
        response.send(resId)
    } else {
        response.status(404).send({ Error: "Reservation is not found" })
    }

});

module.exports = router;