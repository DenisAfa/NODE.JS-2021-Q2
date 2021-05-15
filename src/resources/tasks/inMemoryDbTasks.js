const Task = require('./task.model');

const DB_TASKS = [new Task({ title: 'DenisTask' }), new Task(), new Task()];

module.exports = { DB_TASKS };
