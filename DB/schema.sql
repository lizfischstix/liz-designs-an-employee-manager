DROP DATABASE IF EXISTS employeeManager_db;
CREATE DATABASE employeeManager_db;

USE employeeManager_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL,
  primary key (id),
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL
  department_id INT NOT NULL,
  primary key (id),
  foreign key (department_id)
  references department (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  primary key (id),
  foreign key (role_id),
  references roles (id),
  foreign key (manager_id),
  references employee (id),
);
