const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Cs232889$",
  database: "etracks_db"
});

module.exports = db;
