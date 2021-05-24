let { tasks } = require('../../inMemoryDB/inMemoryDB');
const Task = require('./task.model');

/**
 * Get all tasks
 * @returns {Promise<Array<Task>>}
 */
const getAll = async () => tasks;

/**
 * Get task by id
 * @param {string} id - task id
 * @param {string} boardId - board id
 * @returns {Promise<Task>}
 */
const getTask = async (id, boardId) =>
  tasks.find((elemDB) => elemDB.id === id && elemDB.boardId === boardId);

/**
 * Create new task
 * @param {string} boardId - board id
 * @param {object} newInfo - new task info
 * @returns {Promise<Task>}
 */
const createTask = async (boardId, newInfo) => {
  const newTask = new Task({ ...newInfo, boardId });
  tasks.push(newTask);

  return newTask;
};

/**
 * Update task information
 * @param {string} id - task id
 * @param {string} boardId - board id
 * @param {object} updateInfo - new info about task
 * @returns {Promise<Task>}
 */
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

/**
 * Delete task by id
 * @param {string} id - task id
 * @param {string} boardId - board id
 * @returns {Promise<Task>}
 */
const deleteTask = async (id, boardId) => {
  let deletedTask;
  tasks.forEach((elemDB, ind) => {
    if (elemDB.id === id && elemDB.boardId === boardId) {
      deletedTask = tasks.splice(ind, 1);
    }
  });

  return deletedTask;
};

/**
 * Update task if user delete
 * @param {string} userId - user id
 */
const updateTaskIfUserDelete = async (userId) => {
  tasks.forEach((elemDB, ind) => {
    if (elemDB.userId === userId) {
      tasks[ind].userId = null;
    }
  });
};

/**
 * Delete task if board delete
 * @param {string} boardId - board id
 */
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
