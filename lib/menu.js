const inquirer = require("inquirer");


// Prompt user for options they can choose
function menu() {
  console.log('menu running')
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
    .then(async (answers) => {
      const departmentTable = require("./departmentTable");
      const roleTable = require("./roleTable");
      const EmployeeTable = require("./EmployeeTable");
      const updateEmployee = require("./updateEmployee");
      const addDepartment = require("./addDepartment");
      const addRole = require("./addRole");
      const recruit = require("./recruit");
      switch (answers.home) {
        case "View all departments":
          departmentTable();
          break;
        case "View all roles":
        console.log("roletable clicked");
          await roleTable();
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
          recruit();
          break;
        case "Update an employee role":
          updateEmployee();
          break;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = menu;
