SET NAMES utf8mb4;

-- creating new database 
CREATE DATABASE meal_sharing;

-- cretae 3 tables

CREATE TABLE `meal`(
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` varchar(255) NOT NULL,
`description` text NULL DEFAULT NULL,
`location` varchar(255) NOT NULL,
`when` DATETIME NOT NULL,
`max_reservations` int(10) unsigned NOT NULL,
`price` DECIMAL(5,2), 
`created_date` DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservation`(
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`number_of_guests` int(10) unsigned NOT NULL,
`meal_id` int(10) unsigned NOT NULL,
`created_date` DATE NOT NULL,
`contact_phonenumber` varchar(255) NOT NULL,
`contact_name` varchar(255) NOT NULL,
`contact_email` varchar(255) NOT NULL,
CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `review`(
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` varchar(255) NOT NULL,
`description` text NULL DEFAULT NULL,
`meal_id` int(10) unsigned NOT NULL,
`stars` int(10) unsigned NOT NULL,
`created_date` DATE NOT NULL,
CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;	

-- insert data in all tables

INSERT into meal (id, title, description, location, `when`, max_reservations, price, created_date)
values(1, "Spaghetti Carbonara", "pasta with bacon and egg","Copenhagen", "2021-04-22 19:00:00", 5, 100, "2021-04-21 11:00:00");
INSERT into meal (id, title, description, location, `when`, max_reservations, price, created_date)
values(2, "Lasagna", "flat pasta with ground meat filling","Copenhagen", "2021-04-22 19:00:00", 3, 120, "2021-04-21 11:00:00");
INSERT into meal (id, title, description, location, `when`, max_reservations, price, created_date)
values(3, "Tiramisu", "dessert with mascarpone cheese","Copenhagen", "2021-04-22 19:00:00", 7, 150, "2021-04-21 11:00:00");


INSERT into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
values(1, 3, 1, "2021-04-23 19:00:00", 33245569, "Alex", "alex@gmail.com");
INSERT into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
values(2, 2, 2, "2021-04-23 19:00:00", 39876533, "Anna", "anna@gmail.com");
INSERT into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
values(3, 5, 3, "2021-04-23 19:00:00", 32332569, "Clair", "clair@gmail.com");

INSERT into review (id,title, description, meal_id, stars, created_date)
values(1, "The best Carbonara","I just tried the best Carbonara in Denmark", 1, 5, "2021-04-24 19:00:00");
INSERT into review (id,title, description, meal_id, stars, created_date)
values(2, "Yummy lasagna","I really liked their lasagna", 2, 4, "2021-04-24 19:00:00");
INSERT into review (id,title, description, meal_id, stars, created_date)
values(3, "Excellent Tiramisu","Was not expecting to try such a good tiramisu in Denmark", 3, 5, "2021-04-24 19:00:00");

-- queries for meal table

-- Get all meals
SELECT *
FROM meal;

-- Add a new meal
INSERT into meal (id, title, description, location, `when`, max_reservations, price, created_date)
values(4, "Ravioli", "pasta comprising a filling","Copenhagen", "2021-04-22 19:00:00", 4, 80, "2021-04-23 11:00:00");
INSERT into meal (id, title, description, location, `when`, max_reservations, price, created_date)
values(5, "Pasta with tomatoes", "just a pasta with tomatoes","Copenhagen", "2021-04-22 19:00:00", 2, 90, "2021-04-21 11:00:00");

-- Get a meal with any id, fx 1
SELECT *
FROM meal
WHERE id=1;

-- Update a meal with any id, fx 1.Update any attribute fx the title or multiple attributes
UPDATE meal 
SET title="Pasta pesto",
description = "pasta with pesto"
WHERE id=5;

-- Delete a meal with any id, fx 1
DELETE
FROM meal
WHERE id=5;

-- queries for reservation table

-- Get all reservations
SELECT *
FROM reservation;

-- Add a new reservation
INSERT into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
values(4, 1, 3, "2021-04-23 19:00:00", 33245569, "Alex", "alex@gmail.com");
INSERT into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
values(5, 2, 4, "2021-04-23 19:00:00", 39876533, "Anna", "anna@gmail.com");

-- Get a reservation with any id, fx 1
SELECT *
FROM reservation
WHERE id=2;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation 
SET contact_name = "Raya",
number_of_guests=3
WHERE id=4;

-- Delete a reservation with any id, fx 1
DELETE
FROM reservation
WHERE id=4;

-- queries for review table
-- Get all reviews
SELECT *
FROM review;

-- Add a new review

INSERT into review (id,title, description, meal_id, stars, created_date)
values(4, "Awful ravioli","I didn't like that ravioli", 4, 1, "2021-04-25 19:00:00");
INSERT into review (id,title, description, meal_id, stars, created_date)
values(6, "Italian dessert","I like all italian desserts", 3, 4, "2021-04-25 19:00:00");

-- Get a review with any id, fx 1
SELECT *
FROM review
WHERE id=3;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review 
SET title = "Good raviolo",
description = "finally dissent ravioli in DK",
stars=4
WHERE id=4;

-- Delete a reservation with any id, fx 1
DELETE
FROM review
WHERE id=6;

-- Functionality
-- Get meals that has a price smaller than a specific price fx 90
SELECT *
FROM meal
WHERE price<90;

-- Get meals that still has available reservations
SELECT (meal.max_reservations - reservation.number_of_guests) AS available_reservations, meal.title, meal.description
FROM reservation
INNER JOIN meal ON reservation.meal_id=meal.id
WHERE max_reservations - number_of_guests;



-- Get meals that partially match a title. 
SELECT *
FROM meal
WHERE title LIKE "%rav%";

-- Get meals that has been created between two dates
SELECT meal.title
FROM meal
WHERE created_date BETWEEN  "2021-04-21"
AND "2021-04-23";

-- Get only specific number of meals fx return only 5 meals
SELECT meal.title
FROM meal
LIMIT 3;

-- Get the meals that have good reviews
SELECT  meal.*, AVG(review.stars) AS Stars_recieved
FROM meal
INNER JOIN review ON meal.id=review.meal_id
WHERE stars > 4
GROUP BY review.meal_id;


-- Get reservations for a specific meal sorted by created_date
SELECT *
FROM reservation
INNER JOIN meal ON reservation.meal_id=meal.id
WHERE meal.title="Tiramisu"
ORDER BY reservation.created_date;


-- Sort all meals by average number of stars in the reviews
SELECT  meal.id, meal.title, AVG(review.stars)
FROM meal
INNER JOIN review ON meal.id = review.meal_id
GROUP BY meal_id
ORDER BY AVG(review.stars) DESC;