const mysql = require('mysql2/promise');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Octopus27',
  database: 'employee_tracker'
});

// View all departments
async function getAllDepartments() {
  const [rows] = await pool.query('SELECT * FROM departments');
  return rows;
}

// View all roles
async function getAllRoles() {
  const [rows] = await pool.query('SELECT roles.id, roles.title, roles.salary, departments.name AS department FROM roles LEFT JOIN departments ON roles.department_id = departments.id');
  return rows;
}

// View all employees
async function getAllEmployees() {
  const [rows] = await pool.query(`
    SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department, roles.salary, 
           CONCAT(managers.first_name, ' ', managers.last_name) AS manager 
    FROM employees 
    LEFT JOIN roles ON employees.role_id = roles.id 
    LEFT JOIN departments ON roles.department_id = departments.id 
    LEFT JOIN employees AS managers ON employees.manager_id = managers.id
  `);
  return rows;
}

// Add a department
async function addDepartment(name) {
  await pool.query('INSERT INTO departments (name) VALUES (?)', [name]);
}

// Add a role
async function addRole(title, salary, departmentId) {
  await pool.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
}

// Add an employee
async function addEmployee(firstName, lastName, roleId, managerId) {
  await pool.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
}

// Update an employee's role
async function updateEmployeeRole(employeeId, roleId) {
  await pool.query('UPDATE employees SET role_id = ? WHERE id = ?', [roleId, employeeId]);
}

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole
};
