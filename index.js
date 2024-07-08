const prompts = require('./lib/prompts');
const queries = require('./lib/queries');

// Function to initialize the application
async function initApp() {
  console.log('Welcome to Your Employee Tracker App!');

  // Run the application loop
  while (true) {
    try {
      // Prompt user for action choice
      const action = await prompts.getActionChoice();

      // Perform action based on user choice
      switch (action) {
        case 'View all departments':
          await viewAllDepartments();
          break;
        case 'View all roles':
          await viewAllRoles();
          break;
        case 'View all employees':
          await viewAllEmployees();
          break;
        case 'Add a department':
          await addDepartment();
          break;
        case 'Add a role':
          await addRole();
          break;
        case 'Add an employee':
          await addEmployee();
          break;
        case 'Update employee role':
          await updateEmployeeRole();
          break;
        case 'Exit':
          console.log('Exiting application...');
          process.exit(0);
        default:
          console.log('Invalid choice. Please select a valid action.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
}

// Function to view all departments
async function viewAllDepartments() {
  const departments = await queries.getAllDepartments();
  console.table(departments);
}

// Function to view all roles
async function viewAllRoles() {
  const roles = await queries.getAllRoles();
  console.table(roles);
}

// Function to view all employees
async function viewAllEmployees() {
  const employees = await queries.getAllEmployees();
  console.table(employees);
}

// Function to add a department
async function addDepartment() {
  const name = await prompts.getDepartmentName();
  await queries.addDepartment(name);
  console.log('Department added successfully.');
}

// Function to add a role
async function addRole() {
  const { title, salary, departmentId } = await prompts.getRoleDetails();
  await queries.addRole(title, salary, departmentId);
  console.log('Role added successfully.');
}

// Function to add an employee
async function addEmployee() {
  const { firstName, lastName, roleId, managerId } = await prompts.getEmployeeDetails();
  await queries.addEmployee(firstName, lastName, roleId, managerId);
  console.log('Employee added successfully.');
}

// Function to update an employee's role
async function updateEmployeeRole() {
  const { employeeId, roleId } = await prompts.getEmployeeRoleUpdateDetails();
  await queries.updateEmployeeRole(employeeId, roleId);
  console.log('Employee role updated successfully.');
}

// Initialize the application
initApp();
