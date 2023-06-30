-- Active: 1687807694090@@localhost@3306@companydb
CREATE DATABASE IF NOT EXISTS companydb;
CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO employee VALUES
(1, 'Lenin', 1000),
(2, 'Anibal', 2000),
(3, 'Jazmina', 3000),
(4, 'Patricia', 4000),
(5, 'Odalis', 5000);

SELECT * FROM employee;
-- DELETE FROM employee WHERE id > 5;
