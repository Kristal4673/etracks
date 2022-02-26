USE etracks_db;
INSERT INTO
  department(department_section)
VALUES
  ('General Management'),
  ('Research and Development'),
  ('Purchasing'),
  ('Operations Department.'),
  ('Human Resources');
INSERT INTO
  roles(title, salary, department_id)
VALUES
  ('Operations manager.', 70000, 1),
  ('Chief Executive Officer (CEO) or President', 220000, 1),
  ('Chief Financial Officer (CFO) or Controller', 250000, 1),
  ('Vice President of Production or Production Manager', 190000, 1),
  ('Sales Rep', 35000, 1),
  ('Customer Rep', 35000, 1),
  ('Loan Processor', 45000, 1),
  ('Accountant', 110000, 1),
  ('Office Manager', 35000, 1);
INSERT INTO
  employee(first_name, last_name, role_id)
VALUES
  ('Crystal', 'Soto', 7),
  ('Raul', 'Ruz', 3),
  ('David', 'Soto', 17),
  ('Yenny', 'Lacombe', 13),
  ('Tammy', 'Ruiz', 2),
  ('Caitlyn', 'Griffin', 8),
  ('Sweedney', 'Todd', 9),
  ('Aaron', 'Randall', 6),
  ('Josh', 'Driver', 8),
  ('Adam', 'Sander', 2),
  ('Gianni', 'Secchi', 9);