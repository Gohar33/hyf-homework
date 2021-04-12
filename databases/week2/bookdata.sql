SET NAMES utf8mb4;

-- creating new database 
CREATE DATABASE homework_library_books;
USE homework_library_books;

CREATE TABLE `book`(
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` varchar(255) NOT NULL,
`publisher` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `author`(
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `genre`(
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `book_author`(
`book_id` int(10) unsigned NOT NULL,
`author_id` int(10) unsigned NOT NULL,
 PRIMARY KEY(`book_id`, `author_id`),
CONSTRAINT `fk_book_author_book` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_book_author_author` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `book_genre`(
`book_id` int(10) unsigned NOT NULL,
`genre_id` int(10) unsigned NOT NULL,
PRIMARY KEY(`book_id`, `genre_id`),
CONSTRAINT `fk_book_genre_book` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_book_genre_genre` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- book table
INSERT into book (id,title,publisher) 
values (1, "Eloquent JavaScript, Second Edition", "No Starch Press" );
INSERT into book (id,title,publisher) 
values(2, "Speaking JavaScript", "O'Reilly Media");
INSERT into book (id,title,publisher) 
values (3, "Do Androids Dream of Electric Sheep?",  "Ballantine Books");
INSERT into book (id,title,publisher) 
values (4, "The Wind-Up Bird Chronicle",  "Knopf Doubleday Publishing Group");
INSERT into book (id,title,publisher) 
values (5, "Kafka on the Shore", "Knopf Doubleday Publishing Group");
INSERT into book (id,title,publisher) 
values (6, "I, Robot", "Spectra; Media tie-in edition");

-- author table
INSERT into author (id,name) values(1, "Marijn Haverbeke");
INSERT into author (id,name) values(2, "Axel Rauschmayer");
INSERT into author (id,name) values(3, "Philip K. Dick");
INSERT into author (id,name) values(4, "Haruki Murakami");
INSERT into author (id,name) values(5, "Isaac Azimov");

-- genre table
INSERT into genre (id,name) values(1, "programming");
INSERT into genre (id,name) values(2, "science fiction");
INSERT into genre (id,name) values(3, "fantasy");


-- book_author table
INSERT into book_author (book_id,author_id) values(1, 1);
INSERT into book_author (book_id,author_id) values(2, 2);
INSERT into book_author (book_id,author_id) values(3, 3);
INSERT into book_author (book_id,author_id) values(4, 4);
INSERT into book_author (book_id,author_id) values(5, 4);
INSERT into book_author (book_id,author_id) values(6, 5);


-- book_genre table

INSERT into book_genre (book_id,genre_id) values(1, 1);
INSERT into book_genre (book_id,genre_id) values(2, 1);
INSERT into book_genre (book_id,genre_id) values(3, 2);
INSERT into book_genre (book_id,genre_id) values(4, 3);
INSERT into book_genre (book_id,genre_id) values(5, 3);
INSERT into book_genre (book_id,genre_id) values(6, 2);


