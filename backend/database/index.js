const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: "6000",
    user: "postgres",
    password: "rtadmin",
    database: "tetris",
  },
});

module.exports = knex;
