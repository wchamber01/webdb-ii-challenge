const express = require("express");
const knex = require("knex");

const db = knex({
  client: "sqlite3",
  connection: {
    filename: "../data/vehicles.db3"
  },
  useNullAsDefault: true
});

const router = express.Router();
