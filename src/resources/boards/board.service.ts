import express from 'express';
import * as boardsRepo from './board.memory.repository';
import * as tasksRepo from '../tasks/task.memory.repository';
import { Board } from './board.model';

const getBoards = async (res: express.Response) => {
  const boards = await boardsRepo.getAll();

  res.status(200).json(boards.map(Board.toResponse));
};

const getBoard = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;

  if (!id) {
    throw new Error('Error data');
  }

  const board = await boardsRepo.getBoard(id);

  if (board) res.status(200).json(Board.toResponse(board));

  if (!board) res.status(404).json({ message: 'Board not found' });
};

const createBoard = async (req: express.Request, res: express.Response) => {
  const newBoardInfo = req.body;

  const newBoard = await boardsRepo.createBoard(newBoardInfo);

  if (newBoard) res.status(201).json(Board.toResponse(newBoard));
};

const updateBoard = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const newInfo = req.body;

  if (!id) {
    throw new Error('Error data');
  }

  const updatedBoard = await boardsRepo.updateBoard(id, newInfo);

  if (updatedBoard) res.status(200).json(Board.toResponse(updatedBoard));
};

const deleteBoard = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;

  if (!id) {
    throw new Error('Error data');
  }

  await tasksRepo.deleteTaskIfBoardDelete(id);
  const deletedBoard = await boardsRepo.deleteBoard(id);

  if (deletedBoard)
    res.status(204).json({ message: 'The board has been deleted' });

  if (!deletedBoard) res.status(404).json({ message: 'Board not found' });
};

export { getBoards, getBoard, createBoard, updateBoard, deleteBoard };
