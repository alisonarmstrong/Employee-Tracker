CREATE DATABASE company_db;

USE company_db;

CREATE TABLE employee (
	first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);



CREATE TABLE role (
	title VARCHAR(30),
    salary DECIMAL,
    department_id INT
    );

CREATE TABLE department (
    name VARCHAR(30)
    )