const router = require('express').Router();
const {
  getBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
} = require('./board.service');

router.get('/', getBoards);

router.get('/:id', getBoard);

router.post('/', createBoard);

router.put('/:id', updateBoard);

router.delete('/:id', deleteBoard);

module.exports = router;
