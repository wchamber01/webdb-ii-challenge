exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("vehicles")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("vehicles").insert([
        {
          VIN: "3209UWEFLKO092302139785",
          Make: "Ford",
          Model: "F-150",
          Mileage: "12345",
          Transmission_Type: "manual",
          Title_Status: "clean"
        },
        {
          VIN: "209385LFKJAS34KNT09U9U0",
          Make: "Ford",
          Model: "F-250",
          Mileage: "32970",
          Transmission_Type: "automatic",
          Title_Status: "clean"
        },
        {
          VIN: "809LJKW09682398KJH2KNH9",
          Make: "Ford",
          Model: "F-550",
          Mileage: "285974",
          Transmission_Type: "automatic",
          Title_Status: "salvage"
        }
      ]);
    });
};
