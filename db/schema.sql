DROP DATABASE IF EXISTS united_db;

CREATE DATABASE united_db;

USE united_db;

CREATE TABLE activism(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    a_name VARCHAR(100) NOT NULL,
    a_cause VARCHAR(150) NOT NULL,
    a_location VARCHAR(150) NULL,
    a_hours VARCHAR(100) NULL,
    a_description VARCHAR(550) NOT NULL,
    a_contact VARCHAR(150) NULL,
    a_additional_info VARCHAR(150) NULL,
    date_created  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE friendlyspaces (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fs_name VARCHAR(100) NOT NULL,
    fs_location VARCHAR(150) NOT NULL,
    fs_hours VARCHAR(100) NOT NULL,
    fs_description VARCHAR(550) NOT NULL,
    fs_contact VARCHAR(150) NULL,
    fs_additional_info VARCHAR(150) NULL,
    fs_friendly_rating INT NOT NULL
);