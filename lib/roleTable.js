const db = require("../config/connection");
const cTable = require("console.table");
const chalk = require("chalk");


async function roleTable() {
  const menu = require("./menu.js");
  console.log('here');
  
   try {
    await db.query("SELECT * FROM roles", (err, results) => {
      err ? console.log(err) : console.log("\n\n display all roles\n");
      console.table("results", results);
      
      menu();
    });
  } catch (err) {
    console.log(err);
    menu();
  }
}

module.exports = roleTable;

