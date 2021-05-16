let { tasks } = require('../../inMemoryDB/inMemoryDB');
const Task = require('./task.model');

const getAll = async () => tasks;

const getTask = async (id, boardId) =>
  tasks.find((elemDB) => elemDB.id === id && elemDB.boardId === boardId);

const createTask = async (boardId, newInfo) => {
  const newTask = new Task({ ...newInfo, boardId });
  tasks.push(newTask);

  return newTask;
};

const updateTask = async (id, boardId, updateInfo) => {
  let updatedTask;
  tasks.forEach((elemDB, ind) => {
    if (elemDB.id === id && elemDB.boardId === boardId) {
      tasks[ind] = { ...elemDB, ...updateInfo };
      updatedTask = tasks[ind];
    }
  });

  return updatedTask;
};

const deleteTask = async (id, boardId) => {
  let deletedTask;
  tasks.forEach((elemDB, ind) => {
    if (elemDB.id === id && elemDB.boardId === boardId) {
      deletedTask = tasks.splice(ind, 1);
    }
  });

  return deletedTask;
};

const updateTaskIfUserDelete = async (userId) => {
  tasks.forEach((elemDB, ind) => {
    if (elemDB.userId === userId) {
      tasks[ind].userId = null;
    }
  });
};

const deleteTaskIfBoardDelete = async (boardId) => {
  if (boardId) {
    tasks = tasks.filter((elemDB) => elemDB.boardId !== boardId);
  }
};

module.exports = {
  getAll,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  updateTaskIfUserDelete,
  deleteTaskIfBoardDelete,
};
