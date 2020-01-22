const db = require("../data/db.js");

module.exports = {
  get,
  getById,
  getByVIN,
  getByMake,
  getByModel,
  insert
  // update,
  // remove
};

function get() {
  return db("vehicles");
}

function getById(id) {
  return db("vehicles")
    .where({ id })
    .first();
}

function getByVIN(VIN) {
  return db("vehicles").where({ VIN });
}

function getByMake(make) {
  return db("vehicles").where({ make });
}

function getByModel(model) {
  return db("vehicles").where({ model });
}

function insert(vehicle) {
  return db("vehicles")
    .insert(vehicle)
    .then(([id]) => getById(id));
}
