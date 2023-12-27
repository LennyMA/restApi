-- Active: 1687807694090@@localhost@3306@companydb
CREATE DATABASE IF NOT EXISTS companydb;
CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO employee VALUES
(1, 'Empleado1', 1000),
(2, 'Empleado2', 2000),
(3, 'Empleado3', 3000),
(4, 'Empleado4', 4000),
(5, 'Empleado5', 5000);

SELECT * FROM employee;
-- DELETE FROM employee WHERE id > 5;
