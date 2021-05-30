import { Request, Response } from 'express';
import * as tasksRepo from './task.memory.repository';
import { Task } from './task.model';
import { INewTask, ITaskUpdateInfo } from './task.interfaces';

const getTasks = async (_req: Request, res: Response): Promise<void> => {
  const tasks = await tasksRepo.getAll();

  res.status(200).json(tasks.map(Task.toResponse));
};

const getTask = async (req: Request, res: Response): Promise<void> => {
  const { id, boardId } = req.params;

  if (!id || !boardId) {
    throw new Error('Error data');
  }

  const task = await tasksRepo.getTask(id, boardId);

  if (task) res.status(200).json(Task.toResponse(task));
};

const createTask = async (req: Request, res: Response): Promise<void> => {
  const newTaskInfo: INewTask = req.body;

  const { boardId } = newTaskInfo.boardId ? newTaskInfo : req.params;

  const newTask = await tasksRepo.createTask(boardId, newTaskInfo);

  if (!newTaskInfo) res.status(400).json({ message: 'Bad request' });

  if (newTask) res.status(201).json(Task.toResponse(newTask));
};

const updateTask = async (req: Request, res: Response): Promise<void> => {
  const { id, boardId } = req.params;
  const updateInfo: ITaskUpdateInfo = req.body;

  if (!id || !boardId) {
    throw new Error('Error data');
  }

  const updatedTask = await tasksRepo.updateTask(id, boardId, updateInfo);

  if (!updateInfo) res.status(400).json({ message: 'Bad request' });

  if (updatedTask) res.status(200).json(Task.toResponse(updatedTask));
};

const deleteTask = async (req: Request, res: Response): Promise<void> => {
  const { id, boardId } = req.params;

  if (!id || !boardId) {
    throw new Error('Error data');
  }

  const deletedTask = await tasksRepo.deleteTask(id, boardId);

  if (deletedTask)
    res.status(204).json({ message: 'The task has been deleted' });

  if (!deletedTask) res.status(404).json({ message: 'Task not found' });
};

export { getTasks, getTask, createTask, updateTask, deleteTask };
