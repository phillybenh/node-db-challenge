
exports.seed = function(knex) {
  return knex('contexts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        { id: 1, context: 'home'},
        { id: 2, context: 'away'},
        { id: 3, context: 'third thing'}
      ]);
    });
};
