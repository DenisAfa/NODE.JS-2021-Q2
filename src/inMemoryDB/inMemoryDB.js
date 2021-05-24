const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

const DB = {
  users: [new User({ name: 'Denis' }), new User(), new User()],
  boards: [new Board({ title: 'DenisBoard' }), new Board(), new Board()],
  tasks: [new Task({ title: 'DenisTask' }), new Task(), new Task()],
};

module.exports = DB;
