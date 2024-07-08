-- Insert departments
INSERT INTO departments (name) VALUES
('Engineering'),
('Marketing'),
('Sales');

-- Insert roles
INSERT INTO roles (title, salary, department_id) VALUES
('Software Engineer', 80000, 1),
('Marketing Manager', 90000, 2),
('Sales Representative', 60000, 3);

-- Insert employees
-- Insert managers first
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Michael', 'Johnson', 3, NULL);

-- Insert employees with managers
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('Jane', 'Smith', 2, 1);
