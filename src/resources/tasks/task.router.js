const router = require('express').Router({ mergeParams: true });
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require('./task.service');

router.get('/', getTasks);

router.get('/:id', getTask);

router.post('/', createTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

module.exports = router;
