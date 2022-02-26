const inquirer = require("inquirer");
const viewAllDepartments = require("./viewAllDepartments");
const viewAllRoles = require("./viewAllRoles");
const viewAllEmployees = require("./viewAllEmployees");
const updateEmployeeRole = require("./updateEmployeeRole");
const addADepartment = require("./addADepartment");
const addARole = require("./addARole");
const addAnEmployee = require("./addAnEmployee");
const departmentTable = require("./departmentTable");

// Prompt user for options they can choose
function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "home",
        message: "Please Choose an action below",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.menu) {
        case "View all departments":
          departmentTable();
          break;
        case "View all roles":
          roleTable();
          break;
        case "View all employees":
          EmployeeTable();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateEmployeeRole();
          break;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = menu;
