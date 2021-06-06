import express from 'express';
import {
  getBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
} from './board.service';

const router = express.Router();

router.get('/', getBoards);

router.get('/:id', getBoard);

router.post('/', createBoard);

router.put('/:id', updateBoard);

router.delete('/:id', deleteBoard);

export { router };
