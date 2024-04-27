-- Insert departments
INSERT INTO departments (name) VALUES
('Engineering'),
('Marketing'),
('Sales');

-- Insert employees
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Michael', 'Johnson', 3, 1);

-- Insert roles
INSERT INTO roles (title, salary, department_id) VALUES
('Software Engineer', 80000, 1),
('Marketing Manager', 90000, 2),
('Sales Representative', 60000, 3);
