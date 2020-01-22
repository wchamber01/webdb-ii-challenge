const express = require("express");
const Vehicles = require("./vehicles-model.js");
const knex = require("knex");

const db = knex({
  client: "sqlite3",
  connection: {
    filename: "../data/vehicles.db3"
  },
  useNullAsDefault: true
});

const router = express.Router();

router.get("/", (req, res) => {
  Vehicles.get().then(vehicles => res.status(200).json(vehicles));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Vehicles.get(id).then(vehicle => {
    if (vehicle) {
      res.status(200).json(vehicle);
    } else {
      res
        .status(404)
        .json({ error: `No vehicle with id ${id} located.` })
        .end();
    }
  });
});

router.get("/:VIN", (req, res) => {
  const { VIN } = req.params;
  Vehicles.get(VIN).then(vehicle => {
    if (vehicle) {
      res.status(200).json(vehicle);
    } else {
      res
        .status(404)
        .json({ error: `No vehicle with VIN ${VIN} located` })
        .end();
    }
  });
});

router.get("/:make", (req, res) => {
  const { make } = req.params;
  Vehicles.get(make).then(vehicles => {
    if (vehicles) {
      res.status(200).json(vehicles);
    } else {
      res
        .status(404)
        .json({ error: `No ${make} vehicles available.` })
        .end();
    }
  });
});

router.get("/:model", (req, res) => {
  const { model } = req.params;
  Vehicles.get(model).then(vehicles => {
    if (vehicles) {
      res.status(200).json(vehicles);
    } else {
      res
        .status(404)
        .json({ error: `No ${model} vehicles available.` })
        .end();
    }
  });
});

router.post("/", (req, res) => {
  const { VIN, make, model, transmission_type, title_status } = req.body;
  Vehicles.insert({ VIN, make, model, transmission_type, title_status })
    .then(vehicle => {
      if (vehicle) {
        res.status(200).json(vehicle);
      } else {
        res
          .status(404)
          .json({ error: `New vehicles require VIN, make, model.` })
          .end();
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Error adding vehicle.", message: err.message });
    });
});

module.exports = router;
