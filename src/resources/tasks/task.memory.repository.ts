import { DB } from '../../inMemoryDB/inMemoryDB';
import { Task } from './task.model';

const getAll = async (): Promise<Array<Task>> => DB.tasks;

const getTask = async (
  id: string,
  boardId: string
): Promise<Task | undefined> =>
  DB.tasks.find((task) => task.id === id && task.boardId === boardId);

const createTask = async (boardId: string, newInfo: object): Promise<Task> => {
  const newTask = new Task({ ...newInfo, boardId });
  DB.tasks.push(newTask);

  return newTask;
};

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

const updateTaskIfUserDelete = async (userId: string): Promise<void> => {
  DB.tasks.forEach((task, ind) => {
    if (task.userId === userId && DB.tasks[ind]) {
      DB.tasks[ind]!.userId = null;
    }
  });
};

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
