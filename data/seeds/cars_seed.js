
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
          {'vin': 1213, 'make': 'Chevy', 'model': 'Silverado', 'mileage': 65324, 'transmission': 'no idea', 'title': ''},
          {'vin': 1326, 'make': 'Dodge', 'model': 'DuraMax', 'mileage': 65324, 'transmission': 'no idea', 'title': ''},
          {'vin': 6542, 'make': 'Honda', 'model': 'Civic', 'mileage': 65324, 'transmission': 'no idea', 'title': ''},
          {'vin': 3668, 'make': 'Ford', 'model': 'F-150', 'mileage': 65324, 'transmission': 'no idea', 'title': ''},
      ]);
    });
};
