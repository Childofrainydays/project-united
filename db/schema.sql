DROP DATABASE IF EXISTS united_db;

CREATE DATABASE united_db;

CREATE TABLE activism(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    a_name = VARCHAR(100) NOT NULL,
    a_cause = VARCHAR(150),
    a_location = VARCHAR(150) NOT NULL,
    a_hours = VARCHAR(100),
    a_description = VARCHAR(550) NOT NULL,
    a_contact = VARCHAR(150),
    a_additional_info = VARCHAR(150),
    date_created =  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE friendlyspaces(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fs_name = VARCHAR(100) NOT NULL,
    fs_location = VARCHAR(150),
    fs_hours = VARCHAR(100),
    fs_description = VARCHAR(550) NOT NULL,
    fs_contact = VARCHAR(150),
    fs_additional_info = VARCHAR(150),
    fs_friendly_rating = INT(5) NOT NULL,
);