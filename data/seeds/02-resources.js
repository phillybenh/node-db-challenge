
exports.seed = function (knex) {
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { id: 1, resource_name: 'computer', resource_description: 'black box of electrical gizmos' },
        { id: 2, resource_name: 'standing desk', resource_description: 'desk go up, desk go down' },
        { id: 3, resource_name: 'dry-erase board', resource_description: 'glass thing on wall' },
        { id: 4, resource_name: 'cats', resource_description: 'fuzzy beasts' },
        { id: 5, resource_name: 'catnip', resource_description: 'kitty drugs' }

      ]);
    });
};
