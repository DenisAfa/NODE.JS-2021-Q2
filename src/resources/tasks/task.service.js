const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getTasks = async (req, res) => {
  const tasks = await tasksRepo.getAll();

  res.status(200).json(tasks.map(Task.toResponse));
};

const getTask = async (req, res) => {
  const { id, boardId } = req.params;

  const task = await tasksRepo.getTask(id, boardId);

  if (task) res.status(200).json(Task.toResponse(task));
};

const createTask = async (req, res) => {
  const newTaskInfo = req.body;

  const boardId = newTaskInfo.boardId
    ? newTaskInfo.boardId
    : req.params.boardId;

  const newTask = await tasksRepo.createTask(boardId, newTaskInfo);

  if (!newTaskInfo) res.status(400).json({ message: 'Bad request' });

  if (newTask) res.status(201).json(Task.toResponse(newTask));
};

const updateTask = async (req, res) => {
  const { id, boardId } = req.params;
  const updateInfo = req.body;

  const updatedTask = await tasksRepo.updateTask(id, boardId, updateInfo);

  if (!updateInfo) res.status(400).json({ message: 'Bad request' });

  if (updatedTask) res.status(200).json(Task.toResponse(updatedTask));
};

const deleteTask = async (req, res) => {
  const { id, boardId } = req.params;

  const deletedTask = await tasksRepo.deleteTask(id, boardId);

  if (deletedTask)
    res.status(204).json({ message: 'The task has been deleted' });

  if (!deletedTask) res.status(404).json({ message: 'Task not found' });
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
