exports.up = function(knex) {
  return knex.schema.createTable("vehicles", tbl => {
    tbl.increments();
    tbl
      .string("VIN", 30)
      .unique()
      .notNullable()
      .defaultTo("");
    tbl
      .string("Make", 30)
      .notNullable()
      .defaultTo("");
    tbl
      .string("Model", 30)
      .notNullable()
      .defaultTo("");
    tbl
      .integer("Mileage", 7)
      .notNullable()
      .defaultTo("");
    tbl.string("Transmission_Type", 15);
    tbl.string("Title_Status", 15);
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("vehicles");
};
