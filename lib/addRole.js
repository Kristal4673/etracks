const inquirer = require("inquirer");
const db = require("../config/connection");
const menu = require("./menu.js");

const addRolePrompt = [
  {
    name: "title",
    type: "input",
    message: "Please Insert Role title:",
  },
  {
    name: "salary",
    type: "input",
    message: "Please Insert Salary amount:",
  },
  {
    name: "departmentId",
    type: "input",
    message: "Please input Department ID of New Role:",
  },
];

function addRole() {
  inquirer
    .prompt(addRolePrompt)
    .then((answers) => {
      const menu = require("./menu.js");
      let query =
        "INSERT INTO roles(title, salary, department_id) VALUES (?,?,?)";
      db.query(
        query,
        [answers.title, answers.salary, answers.departmentId],
        (err, results) => {
          err
            ? console.log(err)
            : console.log(
                `\n\nNew Role added: ${answers.title} ${answers.salary}\n`
              );
          menu();
        }
      );
    })
    .catch((err) => {
      console.log(err);
      menu();
    });
}

module.exports = addRole;
