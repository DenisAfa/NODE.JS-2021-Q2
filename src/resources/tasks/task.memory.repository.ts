import { DB } from '../../inMemoryDB/inMemoryDB';
import { Task } from './task.model';

/**
 * Get all tasks
 * @returns {Promise<Array<Task>>}
 */
const getAll = async (): Promise<Array<Task>> => DB.tasks;

/**
 * Get task by id
 * @param {string} id - task id
 * @param {string} boardId - board id
 * @returns {Promise<Task>}
 */
const getTask = async (
  id: string,
  boardId: string
): Promise<Task | undefined> =>
  DB.tasks.find((task) => task.id === id && task.boardId === boardId);

/**
 * Create new task
 * @param {string} boardId - board id
 * @param {object} newInfo - new task info
 * @returns {Promise<Task>}
 */
const createTask = async (boardId: string, newInfo: object): Promise<Task> => {
  const newTask = new Task({ ...newInfo, boardId });
  DB.tasks.push(newTask);

  return newTask;
};

/**
 * Update task information
 * @param {string} id - task id
 * @param {string} boardId - board id
 * @param {object} updateInfo - new info about task
 * @returns {Promise<Task>}
 */
const updateTask = async (
  id: string,
  boardId: string,
  updateInfo: object
): Promise<Task | undefined> => {
  let updatedTask;
  DB.tasks.forEach((task, ind) => {
    if (task.id === id && task.boardId === boardId) {
      DB.tasks[ind] = { ...task, ...updateInfo };
      updatedTask = DB.tasks[ind];
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
const deleteTask = async (
  id: string,
  boardId: string
): Promise<Task | undefined> => {
  let deletedTask;
  DB.tasks.forEach((task, ind) => {
    if (task.id === id && task.boardId === boardId) {
      deletedTask = DB.tasks.splice(ind, 1);
    }
  });

  return deletedTask;
};

/**
 * Update task if user delete
 * @param {string} userId - user id
 */
const updateTaskIfUserDelete = async (userId: string): Promise<void> => {
  DB.tasks.forEach((task, ind) => {
    if (task.userId === userId && DB.tasks[ind]) {
      DB.tasks[ind]!.userId = null;
    }
  });
};

/**
 * Delete task if board delete
 * @param {string} boardId - board id
 */
const deleteTaskIfBoardDelete = async (boardId: string): Promise<void> => {
  if (boardId) {
    DB.tasks = DB.tasks.filter((task) => task.boardId !== boardId);
  }
};

export {
  getAll,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  updateTaskIfUserDelete,
  deleteTaskIfBoardDelete,
};
