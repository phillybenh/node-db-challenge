const db = require('../data/db-config.js')


module.exports = {
    getTasks,
    addTask,
};

function getTasks() {
    return db('tasks')
        .join('projects', 'tasks.project_id', '=', 'projects.id')
        .select("tasks.task_description",
            "tasks.task_notes",
            "tasks.task_completed",
            "projects.project_name",
            "projects.project_description"
        );
};

function addTask(task) {
    return db('tasks')
        .insert(task, 'id')
        .then(ids => {
            console.log(ids)
            return ids;
        });
};

// function getProjectTasks(taskID) {
//     return db('tasks')
//         .where('task_id', taskID)
//         .join('tasks', 'tasks.task_id', '=', 'tasks.id')
//         .select('tasks.task_name', 'tasks.task_description', 'tasks.task_desription', 'tasks.task_notes', 'tasks.completed');
// };

// function addProjectTasks(task, taskID) {
//     return db('tasks')
//         .insert(task, 'id')
//         .then(ids => {
//             console.log(ids)
//             return ids;
//         });

// };