exports.up = function(knex) {
  return knex.schema.createTable("vehicles", tbl => {
    tbl.increments();
    tbl
      .text("VIN", 128)
      .unique()
      .notNullable();
    tbl.string("Make", 128).notNullable();
    tbl.string("Model", 128).notNullable();
    tbl.integer("Mileage", 128).notNullable();
    tbl.string("Transmission Type", 128);
    tbl.string("Title Status", 128);
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("vehicles");
};
