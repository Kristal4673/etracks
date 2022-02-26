const db = require("../config/connection");
const cTable = require("console.table");
const chalk = require("chalk");

async function departmentTable() {
  const menu = require("./menu.js");
  try {
    await db.query("SELECT * FROM department", (err, results) => {
      err ? console.log(err) : console.log("\n\n Display all departments\n");
      console.table(results);
      menu();
    });
  } catch (err) {
    console.log(err);
    menu();
  }
}

module.exports = departmentTable;
