INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES ('001', 'Elliot', 'Smith', '001', NULL),
       ("002", "Amira", "Afzal", "002", "001"),
       ("003", "Christoper", "Lee", "003", "002"),
       ("004", "Verónica", "Rodriguez", "004", "002"),
       ("005", "Igor", "Ivanov", "005", "003");

INSERT INTO roles (id, title, salary, department_id)
VALUES ("001", "Director of School", 200000, "001"),
       ("002", "Director of Curriculum", 150000, "001"),
       ("003", "Lead Learning Specialist", 125000, "001"),
       ("004", "Teacher", 40000.00, "002"),
       ("005", "Speech Language Pathologist", 65000, "004");

INSERT INTO department (id, department_name)
VALUES (001, "Administration"),
       (002, "Instructional Staff"),
       (003, "Maintenance"),
       (004, "Auxiliary Staff");