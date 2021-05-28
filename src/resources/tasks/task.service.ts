import express from 'express';
import * as tasksRepo from './task.memory.repository';
import { Task } from './task.model';

const getTasks = async (_req: express.Request, res: express.Response) => {
  const tasks = await tasksRepo.getAll();

  res.status(200).json(tasks.map(Task.toResponse));
};

const getTask = async (req: express.Request, res: express.Response) => {
  const { id, boardId } = req.params;

  if (!id || !boardId) {
    throw new Error('Error data');
  }

  const task = await tasksRepo.getTask(id, boardId);

  if (task) res.status(200).json(Task.toResponse(task));
};

const createTask = async (req: express.Request, res: express.Response) => {
  const newTaskInfo = req.body;

  const { boardId } = newTaskInfo.boardId ? newTaskInfo : req.params;

  const newTask = await tasksRepo.createTask(boardId, newTaskInfo);

  if (!newTaskInfo) res.status(400).json({ message: 'Bad request' });

  if (newTask) res.status(201).json(Task.toResponse(newTask));
};

const updateTask = async (req: express.Request, res: express.Response) => {
  const { id, boardId } = req.params;
  const updateInfo = req.body;

  if (!id || !boardId) {
    throw new Error('Error data');
  }

  const updatedTask = await tasksRepo.updateTask(id, boardId, updateInfo);

  if (!updateInfo) res.status(400).json({ message: 'Bad request' });

  if (updatedTask) res.status(200).json(Task.toResponse(updatedTask));
};

const deleteTask = async (req: express.Request, res: express.Response) => {
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
