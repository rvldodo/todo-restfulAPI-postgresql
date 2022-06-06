const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "lawalata010328",
  database: "todo_database",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
