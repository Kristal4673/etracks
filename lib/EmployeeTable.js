const db = require("../config/connection");
const cTable = require("console.table");
const chalk = require("chalk");

function employeeTable() {
  const menu = require("./menu.js");
  try {
    db.query("SELECT * FROM employee", (err, results) => {
      err ? console.log(err) : console.log("\n\n Display all employees\n");
      console.table(results);
      menu();
    });
  } catch (err) {
    console.log(err);
    menu();
  }
}
module.exports = employeeTable;
