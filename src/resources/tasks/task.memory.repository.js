let { DB_TASKS } = require('./inMemoryDbTasks');
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
  let deletedTask;
  DB_TASKS.forEach((elemDB, ind) => {
    if (elemDB.id === id && elemDB.boardId === boardId) {
      deletedTask = DB_TASKS.splice(ind, 1);
    }
  });

  return deletedTask;
};

const updateTaskIfUserDelete = async (userId) => {
  DB_TASKS.forEach((elemDB, ind) => {
    if (elemDB.userId === userId) {
      DB_TASKS[ind].userId = null;
    }
  });
};

const deleteTaskIfBoardDelete = async (boardId) => {
  if (boardId) {
    DB_TASKS = DB_TASKS.filter((elemDB) => elemDB.boardId !== boardId);
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
