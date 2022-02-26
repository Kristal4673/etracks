const inquirer = require("inquirer");
const db = require("../config/connection");

function addDepartmentPrompt() {
  inquirer
    .prompt([
      {
        name: "addDepartment",
        type: "input",
        message: "Insert the name of New Department:",
      },
    ])
    .then((answers) => {
      const menu = require("./menu.js");
      let query = "INSERT INTO department(department_section) VALUES (?)";
      db.query(query, [answers.addDepartment], (err, results) => {
        err
          ? console.log(err)
          : console.log(`\n\n Department now added: ${answers.addDepartment}\n`);
        menu();
      });
    })
    .catch((err) => {
      console.log(err);
      menu();
    });
}

module.exports = addADepartment;
