import express from 'express';
import * as usersRepo from './user.memory.repository';
import * as tasksRepo from '../tasks/task.memory.repository';
import { User } from './user.model';

const getUsers = async (res: express.Response) => {
  const users = await usersRepo.getAll();

  res.status(200).json(users.map(User.toResponse));
};

const getUser = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;

  if (!id) {
    res.status(404).json({ message: 'User not found' });
    throw new Error('User not found');
  }

  const user = await usersRepo.getUser(id);

  if (user) res.status(200).json(User.toResponse(user));
};

const createUser = async (req: express.Request, res: express.Response) => {
  const userInfo = req.body;
  const newUser = await usersRepo.createUser(userInfo);

  if (newUser) res.status(201).json(User.toResponse(newUser));
};

const updateUser = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const newUserInfo: object = req.body;

  if (!id) {
    res.status(404).json({ message: 'User not found' });
    throw new Error('User not found');
  }

  const updatedUser = await usersRepo.updateUser(id, newUserInfo);

  if (updatedUser) res.status(200).json(User.toResponse(updatedUser));
};

const deleteUser = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(401).json({ message: 'User not found' });
    throw new Error('User not found');
  }

  await tasksRepo.updateTaskIfUserDelete(id);
  const deletedUser = await usersRepo.deleteUser(id);

  if (deletedUser)
    res.status(204).json({ message: 'The user has been deleted' });
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
