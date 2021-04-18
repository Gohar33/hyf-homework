SET NAMES utf8mb4;

-- creating new database 
CREATE DATABASE school;
USE school;

-- creating table class
CREATE TABLE `class`(
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255) NOT NULL,
`start_date` DATETIME NOT NULL,
`end_date`  DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- creating table student

CREATE TABLE `student`(
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255) NOT NULL,
`email` varchar(255) NOT NULL,
`phone`  varchar(255) NULL,
`class_id` int(10) unsigned NOT NULL,
CONSTRAINT `fk_student_class_student` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- creating index 
CREATE INDEX idx_title
ON `student`(`name`);


-- add new column
ALTER table `class`
ADD `status` enum('not-started', 'ongoing', 'finished') NOT NULL;



