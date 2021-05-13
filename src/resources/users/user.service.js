const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getUsers = async (req, res) => {
  const users = await usersRepo.getAll();

  res.status(200).json(users.map(User.toResponse));
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await usersRepo.getUser(id);

  if (!id)
    res.status(401).json({ message: 'Access token is missing or invalid' });

  if (!user) res.status(404).json({ message: 'User not found' });

  if (user) res.status(200).json(User.toResponse(user));
};

const createUser = async (req, res) => {
  const userInfo = req.body;
  const newUser = await usersRepo.createUser(userInfo);

  if (!userInfo)
    res.status(401).json({ message: 'Access token is missing or invalid' });
  if (newUser) res.status(201).json(User.toResponse(newUser));
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const newUserInfo = req.body;

  const updatedUser = await usersRepo.updateUser(id, newUserInfo);

  if (!updatedUser)
    res.status(401).json({ message: 'Access token is missing or invalid' });

  if (updatedUser) res.status(200).json(User.toResponse(updatedUser));
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const deletedUser = await usersRepo.deleteUser(id);

  if (deletedUser)
    res.status(204).json({ message: 'The user has been deleted' });

  if (!deletedUser)
    res.status(404).json({ message: 'Access token is missing or invalid' });

  if (!id) res.status(401).json({ message: 'User not found' });
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
