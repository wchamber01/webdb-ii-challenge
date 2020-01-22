exports.up = function(knex) {
  return knex.schema.createTable("vehicles", tbl => {
    tbl.increments();
    tbl
      .string("VIN", 30)
      .unique()
      .notNullable();
    tbl.string("Make", 30).notNullable();
    tbl.string("Model", 30).notNullable();
    tbl.integer("Mileage", 7).notNullable();
    tbl.string("Transmission_Type", 15);
    tbl.string("Title_Status", 15);
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("vehicles");
};
