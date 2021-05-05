DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE employee (
	id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
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
    );

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Leslie', 'Knope', 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Ron', 'Swanson', 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Tom', 'Haverford', 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('April', 'Ludgate', 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Donna', 'Meagle', 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Jerry', 'Gergich', 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Andy', 'Dwyer', 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Ben', 'Wyatt', 7, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Chris', 'Traeger', 6, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Ann', 'Perkins', 2, null);

INSERT INTO role (title, salary, department_id)
VALUE ('Director', 70000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ('Deputy', 60000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ('Assistant', 30000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ('Manager', 75000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ('Employee', 45000, 1);

INSERT INTO department (department_name)
VALUE ('Parks & Rec');
INSERT INTO department (department_name)
VALUE ('Public Health');
INSERT INTO department (department_name)
VALUE ('Animal Control');
INSERT INTO department (department_name)
VALUE ('City Managers Office');

SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;