DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE employee (
	id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOL NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);


CREATE TABLE role (
    id INTEGER AUTO_INCREMENT NOT NULL,
	title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id)
    );

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(30),
    PRIMARY KEY (id)
    )

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES

INSERT INTO role (title, salary, department_id)
VALUES

INSERT INTO department (department_name)
VALUES 

SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;