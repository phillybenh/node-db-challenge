
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          project_name: 'Sprint Challenge',
          project_description: 'Try to cram a weeks stuff into 3 hours.',
          project_completed: false
        },
        {
          id: 2,
          project_name: 'Lambda Labs',
          project_description: 'hard compsci stuff',
          project_completed: false
        },
        {
          id: 3,
          project_name: 'Be the cat-man',
          project_description: '',
          project_completed: true
        }
      ]);
    });
};
