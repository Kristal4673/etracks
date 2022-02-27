const inquirer = require("inquirer");
const menu = require("./menu.js");


const addEmployeePrompt = [{
    name: "firstName",
    type: "input",
    message: "Please Enter First name of recruit:",
  },
  {
    name: "lastName",
    type: "input",
    message: "Please Enter Last Name of recruit:",
  },
  {
    name: "roleId",
    type: "input",
    message: "Please Enter Role ID of New Employee:",
  },
];

function addEmployee() {
  inquirer
    .prompt(addEmployeePrompt)
    .then((answers) => {
      const menu = require("./menu.js");
      const db = require("../config/connection");
      let query =
        "INSERT INTO employee(first_name, last_name, role_id) VALUES (?,?,?)";
      db.query(
        query,
        [answers.firstName, answers.lastName, answers.roleId],
        (err, results) => {
          err
            ? console.log(err)
            : console.log(
                `\n\nNew Employee added: ${answers.firstName} ${answers.lastName}\n`
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
module.exports = addEmployee;
