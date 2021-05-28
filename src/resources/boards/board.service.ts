import { Request, Response } from 'express';
import * as boardsRepo from './board.memory.repository';
import * as tasksRepo from '../tasks/task.memory.repository';
import { Board } from './board.model';
import { INewBoard, IBoardUpdateInfo } from './board.memory.repository';

const getBoards = async (_req: Request, res: Response): Promise<void> => {
  const boards = await boardsRepo.getAll();

  res.status(200).json(boards.map(Board.toResponse));
};

const getBoard = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  if (!id) {
    throw new Error('Error data');
  }

  const board = await boardsRepo.getBoard(id);

  if (board) res.status(200).json(Board.toResponse(board));

  if (!board) res.status(404).json({ message: 'Board not found' });
};

const createBoard = async (req: Request, res: Response): Promise<void> => {
  const newBoardInfo: INewBoard = req.body;

  const newBoard = await boardsRepo.createBoard(newBoardInfo);

  if (newBoard) res.status(201).json(Board.toResponse(newBoard));
};

const updateBoard = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const newInfo: IBoardUpdateInfo = req.body;

  if (!id) {
    throw new Error('Error data');
  }

  const updatedBoard = await boardsRepo.updateBoard(id, newInfo);

  if (updatedBoard) res.status(200).json(Board.toResponse(updatedBoard));
};

const deleteBoard = async (req: Request, res: Response): Promise<void> => {
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
