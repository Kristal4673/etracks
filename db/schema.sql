DROP DATABASE IF EXISTS etracks_db;
CREATE DATABASE etracks_db;
USE etracks_db;
DROP TABLE IF EXISTS department;
CREATE TABLE department(
  id INT AUTO_INCREMENT,
  department_section VARCHAR(30),
  PRIMARY KEY(id)
);
DROP TABLE IF EXISTS roles;
CREATE TABLE roles(
  id INT AUTO_INCREMENT,
  title VARCHAR(60),
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY(department_id) REFERENCES department(id)
);
DROP TABLE IF EXISTS employee;
CREATE TABLE employee(
  id INT AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY(manager_id) REFERENCES employee(id)
);