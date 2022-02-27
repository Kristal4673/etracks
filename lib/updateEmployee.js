const inquirer = require("inquirer");
const db = require("../config/connection");
const cTable = require("console.table");
const menu = require("./menu");

const updateEmployeeQuestions = [
  {
    type: "input",
    name: "firstName",
    message: "Please enter FIRST name of Employee to update:",
  },
  {
    type: "input",
    name: "lastName",
    message: "Please enter LAST name of Employee to update:",
  },
  {
    type: "input",
    name: "newRole",
    message: "Please enter NEW ROLE of Employee to update:",
  },
];

function updateEmployeeRole() {
  const menu = require("./menu");
  inquirer
    .prompt(updateEmployeeQuestions)
    .then((answers) => {
      let query = `UPDATE employee SET employee.role_id = ${answers.newRole} WHERE employee.first_name = ? AND employee.last_name = ?`;
      db.query(query, [answers.firstName, answers.lastName], (err, results) => {
        err
          ? console.log(err)
          : console.log(
              `\n\n${answers.firstName} ${answers.lastName}'s Role as been updated\n`
            );
        console.log(results);
      });
      menu();
    })
    .catch((err) => {
      console.log(err);
      menu();
    });
}

module.exports = updateEmployeeRole;
