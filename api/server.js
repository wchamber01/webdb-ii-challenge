const express = require("express");
const helmet = require("helmet");

const vehiclesRouter = require("../vehicles/vehicles-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/vehicles", vehiclesRouter);

module.exports = server;
