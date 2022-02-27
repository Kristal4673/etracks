const addDepartment = require("./lib/addDepartment");
const addRole = require("./lib/addRole");
 const employeeTable= require("./lib/EmployeeTable");
 const menu= require("./lib/menu");
 const recruit= require("./lib/recruit");
 const roleTable = require("./lib/roleTable");
const inquirer = require("inquirer");
const departmentTable = require("./lib/departmentTable");
const updateEmployee = require("./lib/updateEmployee");

async function start() {
    return await inquirer
      .prompt([
        /* Passing questions for command-line prompt here in object */
        {
          name: "option",

          message:
            "What would you like to do?",
          choices: [
            "View All Departments",
            "View All roles",
            "View all Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Add Update Employee Role",
          ],
          type: "list",
        },
      ])
      .then((answers) => {
        // Use user feedback for... whatever!!
        // {{input}}
        renderSection(answers.option);
        console.log(answers);
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });

}
function renderSection(option) {
  let optionType = option;
  let yourOption = "";
  if (optionType === "View All Departments") {
    departmentTable();
  } else if (optionType === "View All roles") {
     roleTable();
  } else if (optionType === "View all Employees") {
    employeeTable();
  } else if (optionType === "Add Department ") {
    addDepartment();
  } else if (optionType === "Add Role") {
    addRole();
  } else if (optionType === "Add Employee") {
    recruit();
  } else if (optionType === "Add Update Employee Role") {
   //roleTable();
  } else {
    yourOption = "N/A";
  }
  return yourOption;
}





const init = async () => {
  start();
};

init();