const inquirer = require('inquirer');

// Function to prompt user for action choice
async function getActionChoice() {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Choose an action:',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update employee role',
        'Exit'
      ]
    }
  ]);
  return action;
}

// Function to prompt user for department name
async function getDepartmentName() {
  const { name } = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the department:'
    }
  ]);
  return name;
}

// Function to prompt user for role details
async function getRoleDetails() {
  const roleDetails = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of the role:'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary of the role:'
    },
    {
      type: 'input',
      name: 'departmentId',
      message: 'Enter the department ID of the role:'
    }
  ]);
  return roleDetails;
}

// Function to prompt user for employee details
async function getEmployeeDetails() {
  const employeeDetails = await inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'Enter the first name of the employee:'
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'Enter the last name of the employee:'
    },
    {
      type: 'input',
      name: 'roleId',
      message: 'Enter the role ID of the employee:'
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'Enter the manager ID of the employee (optional):'
    }
  ]);
  return employeeDetails;
}

// Function to prompt user for employee role update details
async function getEmployeeRoleUpdateDetails() {
  const updateDetails = await inquirer.prompt([
    {
      type: 'input',
      name: 'employeeId',
      message: 'Enter the ID of the employee whose role you want to update:'
    },
    {
      type: 'input',
      name: 'roleId',
      message: 'Enter the new role ID for the employee:'
    }
  ]);
  return updateDetails;
}

module.exports = {
  getActionChoice,
  getDepartmentName,
  getRoleDetails,
  getEmployeeDetails,
  getEmployeeRoleUpdateDetails
};
