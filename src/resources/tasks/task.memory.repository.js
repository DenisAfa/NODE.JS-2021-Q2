const { DB_TASKS } = require('./inMemoryDbTasks');
const Task = require('./task.model');

const getAll = async () => DB_TASKS;

const getTask = async (id, boardId) =>
  DB_TASKS.find((elemDB) => elemDB.id === id && elemDB.boardId === boardId);

const createTask = async (boardId, newInfo) => {
  const newTask = new Task({ ...newInfo, boardId });

  DB_TASKS.push(newTask);

  return newTask;
};

const updateTask = async (id, boardId, updateInfo) => {
  let updatedTask;
  DB_TASKS.forEach((elemDB, ind) => {
    if (elemDB.id === id && elemDB.boardId === boardId) {
      DB_TASKS[ind] = { ...elemDB, ...updateInfo };
      updatedTask = DB_TASKS[ind];
    }
  });

  return updatedTask;
};

const deleteTask = async (id, boardId) => {
  let deletedTask = true;
  DB_TASKS.forEach((elemDB, ind) => {
    if (elemDB.id === id && elemDB.boardId === boardId) {
      deletedTask = DB_TASKS.splice(ind, 1);
    }
  });

  return deletedTask;
};

module.exports = { getAll, getTask, createTask, updateTask, deleteTask };
