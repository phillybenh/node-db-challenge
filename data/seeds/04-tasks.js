
exports.seed = function (knex) {
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          project_id: 1,
          task_description: 'create tables',
          task_notes: 'finished',
          task_completed: true
        },
        {
          id: 2,
          project_id: 1,
          task_description: 'finish seeding',
          task_notes: 'working on it',
          task_completed: false
        },
        {
          id: 3,
          project_id: 2,
          task_description: 'learn more about programing and compsci theory',
          task_notes: 'i hear it is hard',
          task_completed: false
        },
        {
          id: 4,
          project_id: 3,
          task_description: 'pet the cats',
          task_notes: 'ongoing task, can never be completed',
          task_completed: false
        },
        {
          id: 5,
          project_id: 3,
          task_description: 'talk to the cats a little too much',
          task_notes: '',
          task_completed: true
        },
      ]);
    });
};
